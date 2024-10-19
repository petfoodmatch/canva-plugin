Canva.onReady(() => {
  // Get the current design canvas
  const canvas = Canva.getCanvas();

  // Add a button to trigger the distressed filter
  const addDistressedButton = document.createElement('button');
  addDistressedButton.textContent = 'Apply Distressed Filter';
  document.body.appendChild(addDistressedButton);

  // Create a function to add the distressed overlay
  function addDistressedFilter() {
    // Create a new element to act as the distressed overlay
    const distressedOverlay = document.createElement('div');
    distressedOverlay.style.position = 'absolute';
    distressedOverlay.style.top = '0';
    distressedOverlay.style.left = '0';
    distressedOverlay.style.width = '100%';
    distressedOverlay.style.height = '100%';
    distressedOverlay.style.pointerEvents = 'none'; // Let users interact with the design behind it

    // Load a distressed texture image
    distressedOverlay.style.backgroundImage = 'url("path/to/your/distressed-texture.png")';
    distressedOverlay.style.backgroundSize = 'cover';
    distressedOverlay.style.opacity = '0.5'; // Set default opacity

    // Add opacity control for users to fine-tune the distressed effect
    const opacityControl = document.createElement('input');
    opacityControl.type = 'range';
    opacityControl.min = '0';
    opacityControl.max = '1';
    opacityControl.step = '0.01';
    opacityControl.value = '0.5';
    opacityControl.addEventListener('input', (e) => {
      distressedOverlay.style.opacity = e.target.value;
    });

    // Add the distressed overlay to the canvas
    canvas.appendChild(distressedOverlay);
    document.body.appendChild(opacityControl);
  }

  // Event listener for the "Apply Distressed Filter" button
  addDistressedButton.addEventListener('click', addDistressedFilter);
});

function uploadFile() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        alert('你選擇了文件：' + file.name);
        // 在這裡可以加入上傳文件的邏輯
    }
});

// 拖放功能
const dropArea = document.querySelector('.drag-drop');

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#f1f1f1';
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = '#ffffff';
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#ffffff';
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
        alert('你拖動了文件：' + file.name);
        // 在這裡可以加入上傳文件的邏輯
    } else {
        alert('請拖動PDF文件');
    }
});
const dragDropArea = document.getElementById('dragDropArea');
const fileInput = document.getElementById('fileInput');

dragDropArea.addEventListener('click', () => fileInput.click());

dragDropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragDropArea.classList.add('dragging');
});

dragDropArea.addEventListener('dragleave', () => {
  dragDropArea.classList.remove('dragging');
});

dragDropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dragDropArea.classList.remove('dragging');
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    // 處理文件上傳
  }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    document.querySelectorAll(".dz_input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".im_pick");

        dropZoneElement.addEventListener("click", (e) => {
            inputElement.click();
        });

        inputElement.addEventListener("change", (e) => {
            if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
            }
          });
      
        dropZoneElement.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZoneElement.classList.add("im_pick_over");
        });
      
        ["dragleave", "dragend"].forEach((type) => {
            dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("im_pick_over");
            });
        });

        dropZoneElement.addEventListener("drop", (e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
            }

            dropZoneElement.classList.remove("im_pick_over");
        });
    });

    function updateThumbnail(dropZoneElement, file) {

        if (file.type.startsWith("image/")) {
            progress(file.name);
            
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                document.getElementById('preimg').src = reader.result;
                };
            } 
            else {
                alert("File Type Not Supported");
            }
        
    }
    function progress(n)
    {
        var prog = document.getElementById('progress');
        var p = 0;
        var cou = 0;
        var c = document.getElementById('dz_txt');
        var id = setInterval(frame, 200);

        function frame()
        {
            if(p == 100)
            {
                clearInterval(id);
                alert("Uploaded Successfully");
                document.getElementById('dz_txt').innerText = n;
                document.getElementsByClassName('gen')[0].style.display = 'block';
                document.getElementsByClassName('gen')[1].style.display = 'block'; 

            }
            else{
                p += 5;
                cou += 5;
                prog.style.width = p + '%';
                c.innerText = cou + '%';
            }
        }
    }

});
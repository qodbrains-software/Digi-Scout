 /* 
#########################################++++++++++++++++++++++++++++####################################
                                                *****************
                                        ***********SLIDER SCRIPT*************
                                                *****************
#########################################++++++++++++++++++++++++++++####################################
*/

const slides = document.querySelectorAll(".slides");
const dot = document.querySelectorAll(".dot");

let pause = false;
const slider = () => {
    let index = 0;
    setInterval(() => {
        if (!pause) {
            switch (index, index++) {
                case 0:
                    slides[0].style.transform = "translate(-0)"
                    slides[1].style.transform = "translate(-0)"
                    slides[2].style.transform = "translate(-0)"
                    dot[0].style.border = "solid white 1px";
                    dot[1].style.border = "none";
                    dot[2].style.border = "none";
                    break;
                case 1:
                    slides[0].style.transform = "translate(-100%)"
                    slides[1].style.transform = "translate(-100%)"
                    slides[2].style.transform = "translate(-100%)"
                    dot[2].style.border = "none";
                    dot[1].style.border = "solid white 1px";
                    dot[0].style.border = "none";
                    break;
                case 2:
                    slides[0].style.transform = "translate(-200%)"
                    slides[1].style.transform = "translate(-200%)"
                    slides[2].style.transform = "translate(-200%)"
                    dot[2].style.border = "solid white 1px";
                    dot[1].style.border = "none";
                    dot[0].style.border = "none";
                    break;
                }
        }
        if (index === 3) {
            index = 0;
        }
    }, 3500)
}
 slider();

// ***************************** SLIDER SCRIPT END ***********************************

 /* 
#########################################++++++++++++++++++++++++++++####################################
                                                *****************
                                        ***********UPLOAD SCRIPT*************
                                                *****************
#########################################++++++++++++++++++++++++++++####################################
*/

const getValuesFromInputs = () =>{
    const profileName = document.querySelector('input.profile-name').value;
    const profileImg = document.querySelector('input.profile-img').files[0];
    const profileAud = document.querySelector('input.profile-aud').files[0];
    document.querySelector('form').style.display = 'none';
  
   return [profileName, profileImg, profileAud];
 
 }

 const convertInputValues = () => {
    const [profileName, profileImg, profileAud] = getValuesFromInputs();
  
    const profileImgURL = URL.createObjectURL(profileImg);
    const profileAudURL = URL.createObjectURL(profileAud);
   
    return[profileAudURL, profileImgURL, profileName ]
  }

  const addInputToProfile = () => {

    const [profileAudURL, profileImgURL, profileName ]  = convertInputValues();

    document.querySelector('h2').innerHTML = `${profileName}`;
    document.querySelector('.img').setAttribute('src', profileImgURL);
    document.querySelector('.aud').setAttribute('src', profileAudURL);
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    addInputToProfile();
  });
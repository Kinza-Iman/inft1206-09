const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */

const altText = {'pic1.jpg' : 'human eye',
'pic2.jpg' : 'round rock',
'pic3.jpg' : 'pretty purple flowers',
'pic4.jpg' : 'egyptian painting',
'pic5.jpg' : 'butterfly on a leaf'}

/* Looping through images */
for (let i = 0; i < imageArray.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src',  'images/' + imageArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (e) => 
    {
        displayedImage.src = e.target.src;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => 
{
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') 
    {
    
    } else 
    
    {
        
    }
});
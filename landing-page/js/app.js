// Getting the start time to calculate performance
const startingTime = performance.now();

// Initializing variable to the ul element in the html
const navBarList = document.getElementById('navbar__list');
// making an array carrying all buttons in the navBar
let buttons = [];
let sectionsData = [];

// adding Section function
function addSection(sectionName) {
    // Creating a brand new section
    const sectionEl = document.createElement('section');
    // Setting the section Attr 'data-nav' to be found in the navBar
    sectionEl.setAttribute('data-nav', sectionName);
    // Changing the innerHTML to match the default format
    sectionEl.innerHTML = ` <div class="landing__container">
    <h2>${sectionName}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      fermentum metus faucibus lectus pharetra dapibus. Suspendisse
      potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
      lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
      convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
      eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
      nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
      lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
      tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
      vitae elit. Integer nec libero venenatis libero ultricies molestie
      semper in tellus. Sed congue et odio sed euismod.
    </p>

    <p>
      Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
      gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
      Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
      consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
      elementum tortor mollis non.
    </p>
  </div>`;
    // Getting the whole carrying sections thing
    const container = document.querySelector('main');
    // Appending the sections to it
    container.appendChild(sectionEl);
    // Calling the updateNavBar function to add the newly added section
    updateNavBar();
};

// Updating the navBar to include all new and currently added sections
function updateNavBar() {
    navBarList.innerHTML = "";
    buttons = [];
    sectionsData = [];
    // Getting sections into array List
    let sections = document.getElementsByTagName('section');

    // Initializing variable to the ul element in the html
    for (let section of sections) {
        // Creating buttons to append in the ul element in the html
        const li = document.createElement('li');
        const item = document.createElement('button');
        // Editing the button text
        item.textContent = section.getAttribute('data-nav');
        sectionsData.push(section);
        item.addEventListener("click", () => {
            section.scrollIntoView({ behavior: "smooth" });
        });
        buttons.push(item);
        // Appending the button to the ul element in the html
        li.appendChild(item);
        navBarList.appendChild(li);
    };

};
// Making a button to be highlighted
function changeColorOfButton(inputButton) {
    for (let button of buttons) {
        if (button === inputButton) {
            button.classList.add("activeButton");
        } else {
            button.classList.remove("activeButton");
        }
    }
};
// Adding active to the class of the viewed section
function putInActiveState(sections, inputSection) {
    for (let section of sections) {
        if (section == inputSection) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class')
        }
        for (let button of buttons) {
            if (button.textContent === inputSection.getAttribute('data-nav')) {
                button.classList.add("activeButton");
            } else {
                button.classList.remove("activeButton");
            }
        }
    }
};

// For Loop to add sections as many as needed 
// In this example I only added 1 more setion using 5 < 6 the only 1 loop to enter
// Change "6" to any other number to add more sections
for (let index = 5; index < 6; index++) {
    addSection(`Section ${index}`);
}


////*****  EVENTS  *****////
// Checking for inView sections
document.addEventListener('scroll', function () {
    for (section of sectionsData) {
        let rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            putInActiveState(sectionsData, section);
        }
    }
});
// Making the go to top button functionality
document.getElementById('myBtn').addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
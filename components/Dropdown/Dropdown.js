class Dropdown {
  constructor(dropdown) {
    // assign this.element to the dropdown element
    this.dropdown = dropdown;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.dropdown.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.dropdown.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden') ? 
      TweenMax.to(this.content, 1.25, {y: -240, ease: Power3.easeIn}) :
      TweenMax.to(this.content, 1.25, {y: 240, ease: Power3.easeIn});
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
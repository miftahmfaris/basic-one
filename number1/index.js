var paragraphContent = [
  {
    title: "web design",
    content:
      "We provide web design solutions of the very highest order. We'll work with you from the start to understand your exact requirements and will continously work with you to ensure that you're happy with the final site that you purchase",
    buttonName: "GET MORE DETAILS >>"
  },
  {
    title: "marketing",
    content:
      "We can help you promote your business in both the online and offline world's. We specialize in a range of fields from viral marketing campaigns to managing paid adverstising accounts for you. Your brand will be in safe hands with use",
    buttonName: "VIEW CASE STUDIES >>"
  },
  {
    title: "optimization",
    content:
      "Want to drive more traffic to your site? You've come to the right place! We can increase traffic to your site in an organic and effective manner that will ensure more people are aware of your business and the products services you offer",
    buttonName: "LEARN MORE >>"
  }
];

function template(paragraphContent, index) {
  return `<div class="col-12 sub-paragraph">
    <p class="sub-paragraph-title">${paragraphContent.title}</p>
    <p class="border-solid"></p>
    <p class="sub-paragraph-main">${paragraphContent.content}</p>
    <button type="button" id="${index}"class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter${index}">
      ${paragraphContent.buttonName}
    </button>
    <div class="modal fade" id="exampleModalCenter${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">${
              paragraphContent.title
            }</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ${paragraphContent.content}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function showList(index) {
  paragraph3.innerHTML = "";

  paragraphContent.map((paragraphContent, index) => {
    if (index == 2) {
      var element = document.createElement("div");
      element.className = "row margin-right-0";
      element.innerHTML = template(paragraphContent, index);
      paragraph3.appendChild(element);
    } else {
      var element = document.createElement("div");
      element.className = "row margin-right-5";
      element.innerHTML = template(paragraphContent, index);
      paragraph3.appendChild(element);
    }
  });
}

showList();

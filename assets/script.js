document.addEventListener("DOMContentLoaded", function () {
  let imagesData = [
    {
      tags: ["landscape"],
      src: "assets/photos/442439324_8069572559743916_725787932093395_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/432733992_7773953032639205_1309801482839635948_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/438299246_7989334707767702_7549304982556121545_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/446935248_8131015950266243_4989609228574358785_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/448132464_8181121408589030_8951094905686818072_n.jpg",
    },
    {
      tags: ["product"],
      src: "assets/photos/431708210_7731221090245733_5714550673986797129_n.jpg",
    },
    {
      tags: ["product"],
      src: "assets/photos/101202431_3337536306280922_4737444559229812736_n.jpg",
    },
    {
      tags: ["wildlife"],
      src: "assets/photos/448803675_8214446715256499_1658531562295647604_n.jpg",
    },
    {
      tags: ["wildlife"],
      src: "assets/photos/461254307_8823476017686896_9118130265296397954_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/461277078_8810841015617063_7633696818517852790_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/431012728_7722089577825551_4681312924237451177_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/438205269_7922806434420530_8992205330566707012_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/461323766_8830731586961339_872180226845632313_n.jpg",
    },
    {
      tags: ["travel", "landscape"],
      src: "assets/photos/461196702_8813153222052509_1172633610669735622_n.jpg",
    },
    {
      tags: ["travel", "landscape"],
      src: "assets/photos/471985488_9450471621653996_2118598408044956348_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/448548120_8186767104691127_3970406942552317168_n.jpg",
    },
    {
      tags: ["landscape"],
      src: "assets/photos/472194833_9450467341654424_3073400430783498034_n.jpg",
    },
    {
      tags: ["product"],
      src: "assets/photos/472232794_9450466464987845_3824482757716902957_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/474841508_9594903973877426_7035861053752795354_n.jpg",
    },
    {
      tags: ["travel", "landscape"],
      src: "assets/photos/474937096_9603301436371013_3430592456624344939_n.jpg",
    },
    {
      tags: ["product"],
      src: "assets/photos/475831126_9615946958439794_6844209311322736014_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/475858580_9631269560240867_8610131082529579711_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/475886948_9631276110240212_6029608531180012126_n.jpg",
    },
    {
      tags: ["travel"],
      src: "assets/photos/476432065_9671383619562794_2521515037611497376_n.jpg",
    },
  ];
  imagesData = shuffleArray(imagesData);

  imagesData.forEach((obj) => {
    // Create the image element
    const img = document.createElement("img");

    img.setAttribute("class", "item");
    img.setAttribute("data-tags", obj.tags.join());
    img.setAttribute("src", obj.src);

    // Find the first element with the class 'gallery'
    const gallery = document.querySelector(".gallery");

    // Append the image to the gallery
    gallery.appendChild(img);
  });

  const tags = document.querySelectorAll(".tag");
  const items = document.querySelectorAll(".item");

  // Track active filters
  let activeFilters = [];

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const filter = tag.getAttribute("data-filter");

      // Toggle the active class for styling
      tag.classList.toggle("active");

      // Add or remove the tag from activeFilters array
      if (activeFilters.includes(filter)) {
        // If the tag is already active, remove it
        activeFilters = activeFilters.filter((item) => item !== filter);
      } else {
        // If the tag is not active, add it
        activeFilters.push(filter);
      }

      // Filter the items based on active tags
      filterItems();
    });
  });

  function filterItems() {
    items.forEach((item) => {
      const tags = item.getAttribute("data-tags").split(",");

      // Check if all active filters are present in the item's tags
      if (
        activeFilters.length === 0 ||
        activeFilters.every((filter) => tags.includes(filter))
      ) {
        item.style.display = "block"; // Show the item
      } else {
        item.style.display = "none"; // Hide the item
      }
    });
  }
});

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

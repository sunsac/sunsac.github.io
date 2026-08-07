const normalizeImageTitle = (value) =>
  value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

async function loadOverviewSignatureImages() {
  const images = document.querySelectorAll(".map-signature-image[data-image-query]");
  await Promise.all([...images].map(async (image) => {
    const query = image.dataset.imageQuery;
    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=8&prop=pageimages&piprop=thumbnail&pithumbsize=240&format=json&origin=*`,
      );
      const pages = Object.values((await response.json()).query?.pages || {})
        .filter((page) => page.thumbnail)
        .sort((a, b) => (a.index || 999) - (b.index || 999));
      const exactMatch = pages.find((page) =>
        normalizeImageTitle(page.title).includes(normalizeImageTitle(query)),
      );
      const source = (exactMatch || pages[0])?.thumbnail?.source;
      if (source) {
        image.src = source;
        image.classList.add("is-loaded");
      } else {
        image.classList.add("image-fallback");
      }
    } catch {
      image.classList.add("image-fallback");
    }
  }));
}

document.addEventListener("DOMContentLoaded", loadOverviewSignatureImages);

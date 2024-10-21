import starSvg from "./images/star.svg";
import githubSvg from "./images/github.svg";
import demoSvg from "./images/view_demo.svg";

const projectsContainer = document.getElementById("projects");

const createComponent = (
  name,
  description,
  topics,
  stars,
  urlToRepo,
  homepage
) => {
  let topicsContent = "";
  let demoContent = "";

  if (topics.length > 0) {
    topicsContent = '<ul class="flex gap-2 flex-wrap mb-10">';
    for (const topic of topics) {
      topicsContent += `<li
          class="h-6 flex gap-0.5 items-center bg-gray-400/10 py-1 px-2 leading-none rounded text-sm font-bold"
        >
          ${topic}
        </li>`;
    }
    topicsContent += "</ul>";
  }

  if (homepage) {
    demoContent = ` <a
          class="md:text-xl bg-bg text-accent border-gray-800 border-2 flex gap-3 font-bold py-4 px-5 items-center rounded-wtf md:rounded-xl hover:border-accent transition-colors duration-500"
          href="${homepage}"
          target="_blank"
          rel="noreferrer nofollow"
          ><img src="${demoSvg}" class="w-6 h-6" alt="view demo"/>View
          demo</a
        >`;
  }

  let template = `
    <article
    class="bg-gradient-to-br from-white/10 to-white/5 rounded-wtf md:rounded-wtfxl shadow-inner-light ring-1 ring-inset ring-bg overflow-clip flex flex-col h-full"
  >
    <div
      class="border-b border-bg h-11 p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-t-wtf md:rounded-t-wtftlr shadow-inner-light flex flex-row gap-1.5"
    >
      <spna class="bg-bg w-3 h-3 block rounded-full opacity-50"></spna>
      <spna class="bg-bg w-3 h-3 block rounded-full opacity-50"></spna>
      <spna class="bg-bg w-3 h-3 block rounded-full opacity-50"></spna>
    </div>
    <div class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow">
    <div>
      <header class="flex flex-row gap-4 items-center mb-4">
        <h3 class="text-2xl font-bold leading-none">${name}</h3>
        <p
          class="h-6 flex gap-0.5 items-center bg-gray-400/10 py-1 px-2 leading-none font-medium rounded"
        >
          <img src="${starSvg}" alt="stars" />${stars}
        </p>
      </header>
      <p class="text-gray-400 text-xl mb-4">${description}</p>
      ${topicsContent}
      </div>
      <div class="flex flex-col md:flex-row gap-4 items-start mt-4 flex-wrap ">
       ${demoContent}
        <a
          class="md:text-xl bg-bg text-accent border-gray-800 border-2 flex gap-3 font-bold py-4 px-5 items-center rounded-wtf md:rounded-xl hover:border-accent transition-colors duration-500"
          href="${urlToRepo}"
          target="_blank"
          rel="noreferrer noopener nofollow"
          ><img src="${githubSvg}" class="w-6 h-6" alt="go to source"/>Source
          code</a
        >
      </div>
    </div>
  </article>
`;

  return template;
};

const getProjects = async () => {
  const url = "https://api.github.com/users/adrian-paliwoda/repos";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = "Response with error codee " + response.status;
      console.log(message);
      throw new Error(message);
    }

    let allComponent = "";
    const result = await response.json();
    for (const repo of result) {
      const name = repo.name;
      const description = repo.description;
      const topics = repo.topics;
      const stars = repo.stargazers_count;
      const urlToRepo = repo.clone_url;
      const homepage = repo.homepage;

      if (!description) {
        continue;
      }

      const component = createComponent(
        name,
        description,
        topics,
        stars,
        urlToRepo,
        homepage
      );

      allComponent += component;
    }
    projectsContainer.insertAdjacentHTML("afterbegin", allComponent);
  } catch (error) {
    console.log("Cannot obtain projects.");
  }
};

getProjects();
console.log('Hi! Wanna talk - send me a message');

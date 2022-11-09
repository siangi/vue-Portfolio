import { defineStore } from "pinia";
import { createClient } from "contentful";
import { ref } from "vue";

const localData = { projects: [] };

function cleanProjectsArray(contentfulData) {
  let result = [];
  contentfulData.items.forEach((projectItem, index) => {
    let cleanProject = {
      id: index,
      title: projectItem.fields.title,
      thumbnailUrl: projectItem.fields.thumbnail.fields.file.url,
      documentationEntries: [],
      liveLink: projectItem.fields.liveLink,
      repositoryLink: projectItem.fields.repositoryLink,
    };
    projectItem.fields.documentationEntries.forEach((docItem) => {
      let cleanDoc = {
        isImage: docItem.fields.isImage,
        textTitle: docItem.fields.textTitle,
        imageUrl: docItem.fields.imageContent?.fields.file.url,
        textParagraph: docItem.fields.textParagraph,
        positioning: docItem.fields.positioning,
      };
      cleanProject.documentationEntries.push(cleanDoc);
    });

    result.push(cleanProject);
  });
  return result;
}

let client = createClient({
  space: "jfbiriazkehh",
  accessToken: "PJ2rc9wfcHt-OqFmTWgRF5usmXx7_8u3qAJ2cbWDdbI",
});


client
  .getEntries({
    content_type: "portfolioProjects",
  })
  .then((entries) => {
    const store = useProjectsStore()
    store.setProjectData(cleanProjectsArray(entries).reverse());
    console.log(store.projects);
    console.log("check")
  });


const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: []
  }),
  actions: {
    setProjectData(newData) {
      this.projects = newData;
    }
  }  
});




export default useProjectsStore;

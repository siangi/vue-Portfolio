
    import { defineStore } from "pinia";
    import { createClient } from "contentful";
    import {ref} from "vue";

    const localData = { projects: []};

    function cleanProjectsArray(contentfulData) {
        let result = [];
        contentfulData.items.forEach((projectItem, index) => {
            let cleanProject = {
            id: index,
            title: projectItem.fields.title,
            thumbnailUrl: projectItem.fields.thumbnail.fields.file.url,
            documentationEntries: [],
            liveLink: projectItem.fields.liveLink,
            };
            projectItem.fields.documentationEntries.forEach((docItem) => {
            let cleanDoc = {
                isImage: docItem.fields.isImage,
                textTitle: docItem.fields.textTitle,
                imageUrl: docItem.fields.imageContent?.fields.file.url,
                textContent: docItem.fields.textContent?.content[0].content.value,
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

    await client
        .getEntries({
            content_type: "portfolioProjects",
        })
        .then((entries) => {
            localData.projects = cleanProjectsArray(entries);
        }
    );

  const useProjectsStore = defineStore('projects', () => {
    const projectData = ref(localData);
    return { projectData };
  });

  export default useProjectsStore;

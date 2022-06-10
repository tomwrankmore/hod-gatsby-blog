export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a35f07cc57295bf4861817",
                  title: "Sanity Studio",
                  name: "hod-gatsby-blog-studio",
                  apiId: "56c5f147-5744-4b1f-bcbb-0ff58ae48a38",
                },
                {
                  buildHookId: "62a35f073d7f8258e8a1c3d4",
                  title: "Blog Website",
                  name: "hod-gatsby-blog",
                  apiId: "9c60b763-5828-4507-91bc-aa46e75a2e1d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tomwrankmore/hod-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://hod-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

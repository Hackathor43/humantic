let data = {
    name: "root",
    isFolder: true,
    depth : 0,
    items: [
      {
        name: "public",
        isFolder: true,
        depth : 1,
        items: [
          {
            name: "index.html",
            isFolder: false,
            depth : 2,
            items: []
          }
        ]
      },
      {
        name: "src",
        isFolder: true,
        depth : 1,
        items: []
      },
      {
        name: "package.json",
        isFolder: false,
        depth : 1,
        items: []
      }
    ]
  };
  
  export default data;
  
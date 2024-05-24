export const user = {
    _id: "64df3c064180b81adfe41d4b",
    firstName: "Laiqa",
    lastName: "Ali",
    email: "laiqaali00786@gmail.com",
    friends: [
      {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Janeeta",
        lastName: "Noor",
        email: "janeetanoor@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
        views: [],
        verified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 2,
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
      },
      {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Sajjad",
        lastName: "Ali",
        email: "sajjadali@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
        views: [
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
        ],
        verified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 8,
        location: "Rawalpindi, Pakistan",
        profession: "Electrical Engineer",
      },
      {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Ali",
        lastName: "G",
        email: "alig@gmail.com",
        friends: ["64df3c064180b81adfe41d4b"],
        views: [],
        verified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 1,
      },
    ],
    views: [
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
    ],
    verified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    profileUrl:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
    token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
  };
  
  export const friends = [
    {
      __id: "64df3aec4180b81adfe41d32",
      firstName: "Janeeta",
      lastName: "Noor",
      email: "janeetanoor@gmail.com",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Sajjad",
      lastName: "Ali",
      email: "sajjadali@gmail.com",
      location: "Rawalpindi, Pakistan",
      profession: "Electrical Engineer",
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Ali",
      lastName: "G",
      email: "alig@gmail.com",
    },
  ];
  
  export const requests = [
    {
      _id: "64df3aec4180b81adfe41d32",
      requestFrom: friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      requestFrom: friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      requestFrom: friends[2],
    },
  ];
  
  export const suggest = [
    {
      _id: "64df3aec4180b81adfe41d32",
      ...friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      ...friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      ...friends[2],
    },
  ];
  export const posts = [
    {
      _id: "64e2fe620d7868ecff1a6a86",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Chris",
        lastName: "Omar",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
        location: "New York, USA",
      },
      description: "Hello everyone, this is a new video. check it out. thank you",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692597858/SOCIALMEDIA/hdahstpztt1fvobc13st.png",
      likes: ["64df3c064180b81adfe41d4b"],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64e1cdd64baffca670364c8c",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Love",
        lastName: "Banks",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
        location: "Mumbai, India",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64df437e4a4c0d47b536a002",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Ali",
        lastName: "G",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: ["64df424b4a4c0d47b5369f65"],
      comments: ["64e2d1c977e497bd3a0bf67b"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874458/samples/imagecon-group.jpg",
    },
    {
      _id: "64df43714a4c0d47b5369fef",
      userId: {
        _id: "64df3c064180b81adfe41d4b",
        firstName: "Laiqa",
        lastName: "Ali",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64df42dc4a4c0d47b5369f8a",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Ali",
        lastName: "G",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,",
      likes: ["64df424b4a4c0d47b5369f65"],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874457/samples/ecommerce/leather-bag-gray.jpg",
    },
    {
      _id: "64df42b04a4c0d47b5369f77",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Ali",
        lastName: "G",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: [],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64df41114a4c0d47b5369f02",
      userId: {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Jomes",
        lastName: "Gardener",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64df3ef86c2bd953c7b43193",
      userId: {
        _id: "64df3c064180b81adfe41d4b",
        firstName: "Laiqa",
        lastName: "Ali",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
      },
      description:
        "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, ",
      likes: [
        "64df3aec4180b81adfe41d32",
        "64df424b4a4c0d47b5369f65",
        "64df39704180b81adfe41d0b",
      ],
      comments: [
        "64df41304a4c0d47b5369f0d",
        "64df41b14a4c0d47b5369f4d",
        "64df43e04a4c0d47b536a02a",
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874455/samples/animals/three-dogs.jpg",
    },
    {
      _id: "64df3ed06c2bd953c7b43172",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "John ",
        lastName: "Smith",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
        location: "Rawalpindi, Pakistan",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      likes: ["64df39704180b81adfe41d0b"],
      comments: ["64e2dc8577e497bd3a0bf843"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
    },
  ];
  
  export const postComments = [
    {
      _id: "64df43e04a4c0d47b536a02a",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Ali",
        lastName: "G",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "hahahah",
      from: "User One",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64df41b14a4c0d47b5369f4d",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "MTech",
        lastName: "Solutions",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
        location: "Rawalpindi, Pakistan",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "i would like to have them in my house",
      from: "MTech Solutions",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    },
    {
      _id: "64df41304a4c0d47b5369f0d",
      userId: {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Akwasi",
        lastName: "Asante",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "This dogs are too serious!",
      from: "Akwasi Asante",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [
        {
          userId: {
            _id: "64df39704180b81adfe41d0b",
            firstName: "MTech",
            lastName: "Solutions",
            profileUrl:
              "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
            location: "Mumbai, India",
          },
          from: "MTech Solutions",
          replyAt: "Akwasi Asante",
          comment: "Not easy, hahahah",
          created_At: new Date().toISOString(),
          updated_At: new Date().toISOString(),
          likes: [],
          _id: "64df41644a4c0d47b5369f24",
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 1,
    },
  ];
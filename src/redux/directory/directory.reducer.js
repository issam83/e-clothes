const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/19/08/39/hats-995629_960_720.jpg",
      id: "1",
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: "2",
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?cs=srgb&dl=pair-of-white-air-jordan-1-s-2385477.jpg&fm=jpg",
      id: "3",
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/3977543/pexels-photo-3977543.jpeg?cs=srgb&dl=woman-in-black-and-gray-long-sleeve-shirt-3977543.jpg&fm=jpg",
      size: "large",
      id: "4",
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?cs=srgb&dl=man-wearing-black-and-white-paisley-dress-shirt-2897531.jpg&fm=jpg",
      size: "large",
      id: "5",
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

const recipes = [
    {
      name: "Spaghetti Carbonara",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Butter Chicken",
      chef: "Chef Mari",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Lunch",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-1.jpg",
    },
    {
      name: "idly",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Breakfast",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nfbDiVFxBQGys61H7X7B1A.jpeg",
    },
    {
      name: "Dosa",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Breakfast",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.whqc_768x512q80.jpg",
    },
    {
      name: "Wada",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Breakfast",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://thumbs.dreamstime.com/b/medhu-wada-breakfast-sambar-chutney-typical-south-indian-129280714.jpg",
    },
    {
      name: "Kulfi",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dessert",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://palatesdesire.com/wp-content/uploads/2022/06/Pista-badam-kulfi-recipe@palates-desire-1.jpg",
    },
    {
      name: "Chicken",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Mutton curry",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Fish curry",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Sambar Rice",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Chicken biryani",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Mutton biryani",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Paneer biryani",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Veg biryani",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Veg Rice",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Chicken Rice",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Rice",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Cake",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Coffee",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Tea",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Chicken Chicken",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Chicken 65",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    {
      name: "Chicken fry",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },{
      name: "Chicken pakoda",
      chef: "Chef Mario",
      totalRatings: 500,
      avgRating: 4.8,
      uploadedOn: "2024-01-15",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
      imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg",
    },
    
  ];
  
  export default recipes;
  
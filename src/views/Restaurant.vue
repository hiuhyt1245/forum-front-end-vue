<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
/* eslint-disable */
const dummyData = {
  restaurant: {
    id: 1,
    name: "Myron Kuphal PhD",
    tel: "(261) 868-4875",
    address: "15909 Kacie Extensions",
    opening_hours: "08:00",
    description: "Libero officiis autem.\nIusto nemo repellendus.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=51.087527880837634",
    viewCounts: 1,
    createdAt: "2022-05-14T07:06:56.000Z",
    updatedAt: "2022-05-28T10:07:05.366Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 101,
        text: "Pariatur totam eum est possimus repudiandae.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$2z1YFO8kuhw78N9UvMnECOsNCdh79QCba3YJCcXg2hv3/aOxhM/6u",
          isAdmin: false,
          image: null,
          createdAt: "2022-05-14T07:06:56.000Z",
          updatedAt: "2022-05-14T07:06:56.000Z",
        },
      },
      {
        id: 51,
        text: "Debitis cumque rerum nobis inventore ut dolores.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$./cb.CUiUuvbIqY0PpRPpuodDigTkU0iPIfSkuG61boEvr2LIBSva",
          isAdmin: true,
          image: null,
          createdAt: "2022-05-14T07:06:56.000Z",
          updatedAt: "2022-05-14T07:06:56.000Z",
        },
      },
      {
        id: 1,
        text: "Iste quidem delectus ea veniam eum quidem.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$2z1YFO8kuhw78N9UvMnECOsNCdh79QCba3YJCcXg2hv3/aOxhM/6u",
          isAdmin: false,
          image: null,
          createdAt: "2022-05-14T07:06:56.000Z",
          updatedAt: "2022-05-14T07:06:56.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
export default {
  name: "Restaurant",
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      const { restaurant, isFavorited, isLiked } = dummyData
      const {
        id,
        name,
        Category,
        image,
        opening_hours,
        tel,
        address,
        description,
        Comments
      } = restaurant
      
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        image,
        openingHours: opening_hours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      }
      this.restaurantComments = Comments
    }
  }
};

</script>
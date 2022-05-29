<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <restaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Myron Kuphal PhD",
      tel: "(261) 868-4875",
      address: "15909 Kacie Extensions",
      opening_hours: "08:00",
      description: "Libero officiis autem.\nIusto nemo repellendus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.087527880837634",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Ms. Tatum Pacocha",
      tel: "023.985.8713",
      address: "6501 Nikolaus Summit",
      opening_hours: "08:00",
      description: "repellendus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.51839680822327",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Justyn Kihn",
      tel: "(691) 597-4993",
      address: "61749 Nolan Trace",
      opening_hours: "08:00",
      description: "Ea non officiis voluptatem rerum. Accusantium omni",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.28112142878739",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Rhea MacGyver",
      tel: "013-672-6102 x195",
      address: "1578 Emelia Rapids",
      opening_hours: "08:00",
      description: "Minus autem sint porro ea omnis est. Suscipit opti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.260203734355077",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Oma Rowe",
      tel: "690-568-4406",
      address: "224 Kraig Villages",
      opening_hours: "08:00",
      description: "Unde eaque neque velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.60989711086938",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Katarina Bailey",
      tel: "244-503-6898 x22315",
      address: "119 Bruen Lakes",
      opening_hours: "08:00",
      description: "assumenda mollitia et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.95179874898409",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Giovanny Schmitt",
      tel: "393.651.0942",
      address: "0211 Tessie Parkways",
      opening_hours: "08:00",
      description: "Consequatur nihil temporibus adipisci omnis volupt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.653152628898965",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Lauryn Brakus",
      tel: "010-298-5011",
      address: "212 Federico Crescent",
      opening_hours: "08:00",
      description: "At delectus necessitatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.50470635587766",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Mina Reichel",
      tel: "(617) 067-4657 x2176",
      address: "93344 Amira Lakes",
      opening_hours: "08:00",
      description: "nihil",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.526736988783456",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Orion Pfeffer",
      tel: "1-154-151-0158 x54535",
      address: "290 Rylan River",
      opening_hours: "08:00",
      description: "Assumenda et quod similique. Ipsa quas quis aut. S",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.154517099066666",
      viewCounts: 0,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: 'Restanrants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
   }
  }
};
</script>
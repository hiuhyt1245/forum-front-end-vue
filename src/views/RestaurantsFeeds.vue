<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue"

/* eslint-disable */
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
    },
    {
      id: 3,
      name: "Justyn Kihn",
      tel: "(691) 597-4993",
      address: "61749 Nolan Trace",
      opening_hours: "08:00",
      description:
        "Ea non officiis voluptatem rerum. Accusantium omnis dolores fuga cupiditate. Quisquam et nisi quia. Voluptatibus autem minima et assumenda perspiciatis autem minus sint.",
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
    },
    {
      id: 4,
      name: "Rhea MacGyver",
      tel: "013-672-6102 x195",
      address: "1578 Emelia Rapids",
      opening_hours: "08:00",
      description:
        "Minus autem sint porro ea omnis est. Suscipit optio consequatur explicabo nam laudantium. Omnis repudiandae non omnis labore sequi autem est.\n \rProvident qui est qui natus nulla. Et fugit ipsa dolores laudantium maxime neque eum et. Qui alias tempora. Asperiores excepturi aspernatur sed voluptatum totam iste officia sunt veritatis. Nihil omnis placeat voluptatibus sint nihil delectus autem doloribus. Adipisci necessitatibus reprehenderit vel alias aspernatur dolorem quod ducimus voluptate.\n \rEligendi est accusamus corporis fugiat. Quia aut aut eaque in corrupti odio ex non. Ut non et. Et quod consequatur quod.",
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
    },
    {
      id: 7,
      name: "Giovanny Schmitt",
      tel: "393.651.0942",
      address: "0211 Tessie Parkways",
      opening_hours: "08:00",
      description:
        "Consequatur nihil temporibus adipisci omnis voluptatem vero consequatur.\nUnde repudiandae in illo soluta ut eum iure ab reiciendis.",
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
    },
    {
      id: 10,
      name: "Orion Pfeffer",
      tel: "1-154-151-0158 x54535",
      address: "290 Rylan River",
      opening_hours: "08:00",
      description:
        "Assumenda et quod similique. Ipsa quas quis aut. Sed optio sit quia rerum illo est sapiente neque. Deserunt quisquam deserunt quia dicta cumque qui. Illo porro aut consectetur et eos rerum rem aut.",
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
    },
  ],
  comments: [
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
      Restaurant: {
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
      },
    },
    {
      id: 2,
      text: "Et repudiandae aperiam nesciunt consequatur aut voluptatem.",
      UserId: 3,
      RestaurantId: 2,
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
      Restaurant: {
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
      },
    },
    {
      id: 3,
      text: "Dolorem vel ea repellendus at labore est vel quasi.",
      UserId: 3,
      RestaurantId: 3,
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
      Restaurant: {
        id: 3,
        name: "Justyn Kihn",
        tel: "(691) 597-4993",
        address: "61749 Nolan Trace",
        opening_hours: "08:00",
        description:
          "Ea non officiis voluptatem rerum. Accusantium omnis dolores fuga cupiditate. Quisquam et nisi quia. Voluptatibus autem minima et assumenda perspiciatis autem minus sint.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=84.28112142878739",
        viewCounts: 0,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 4,
      text: "Et laudantium reiciendis delectus enim dolorem cupiditate a.",
      UserId: 1,
      RestaurantId: 4,
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
      Restaurant: {
        id: 4,
        name: "Rhea MacGyver",
        tel: "013-672-6102 x195",
        address: "1578 Emelia Rapids",
        opening_hours: "08:00",
        description:
          "Minus autem sint porro ea omnis est. Suscipit optio consequatur explicabo nam laudantium. Omnis repudiandae non omnis labore sequi autem est.\n \rProvident qui est qui natus nulla. Et fugit ipsa dolores laudantium maxime neque eum et. Qui alias tempora. Asperiores excepturi aspernatur sed voluptatum totam iste officia sunt veritatis. Nihil omnis placeat voluptatibus sint nihil delectus autem doloribus. Adipisci necessitatibus reprehenderit vel alias aspernatur dolorem quod ducimus voluptate.\n \rEligendi est accusamus corporis fugiat. Quia aut aut eaque in corrupti odio ex non. Ut non et. Et quod consequatur quod.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=9.260203734355077",
        viewCounts: 0,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 5,
      text: "Quasi inventore voluptatem suscipit nihil dolorum aspernatur id vel.",
      UserId: 3,
      RestaurantId: 5,
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
      Restaurant: {
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
      },
    },
    {
      id: 6,
      text: "Doloribus autem saepe est.",
      UserId: 1,
      RestaurantId: 6,
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
      Restaurant: {
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
      },
    },
    {
      id: 7,
      text: "Perspiciatis incidunt accusantium corporis minima accusantium voluptas consequatur excepturi nemo.",
      UserId: 2,
      RestaurantId: 7,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$lZ2Rmmbv24ZPGI/lpRJGwOwyrCi0JCjC8FAWwzxhJaY9dOs5cxoPS",
        isAdmin: false,
        image: null,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      Restaurant: {
        id: 7,
        name: "Giovanny Schmitt",
        tel: "393.651.0942",
        address: "0211 Tessie Parkways",
        opening_hours: "08:00",
        description:
          "Consequatur nihil temporibus adipisci omnis voluptatem vero consequatur.\nUnde repudiandae in illo soluta ut eum iure ab reiciendis.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=9.653152628898965",
        viewCounts: 0,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 8,
      text: "Commodi veniam ea et praesentium id omnis et dolor.",
      UserId: 3,
      RestaurantId: 8,
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
      Restaurant: {
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
      },
    },
    {
      id: 9,
      text: "Sapiente asperiores quibusdam.",
      UserId: 2,
      RestaurantId: 9,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$lZ2Rmmbv24ZPGI/lpRJGwOwyrCi0JCjC8FAWwzxhJaY9dOs5cxoPS",
        isAdmin: false,
        image: null,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      Restaurant: {
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
      },
    },
    {
      id: 10,
      text: "Omnis sit quia quisquam.",
      UserId: 2,
      RestaurantId: 10,
      createdAt: "2022-05-14T07:06:56.000Z",
      updatedAt: "2022-05-14T07:06:56.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$lZ2Rmmbv24ZPGI/lpRJGwOwyrCi0JCjC8FAWwzxhJaY9dOs5cxoPS",
        isAdmin: false,
        image: null,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
      },
      Restaurant: {
        id: 10,
        name: "Orion Pfeffer",
        tel: "1-154-151-0158 x54535",
        address: "290 Rylan River",
        opening_hours: "08:00",
        description:
          "Assumenda et quod similique. Ipsa quas quis aut. Sed optio sit quia rerum illo est sapiente neque. Deserunt quisquam deserunt quia dicta cumque qui. Illo porro aut consectetur et eos rerum rem aut.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=54.154517099066666",
        viewCounts: 0,
        createdAt: "2022-05-14T07:06:56.000Z",
        updatedAt: "2022-05-14T07:06:56.000Z",
        CategoryId: 1,
      },
    },
  ],
};

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
};
</script>
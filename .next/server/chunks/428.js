exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 5810:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8191));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5141))

/***/ }),

/***/ 9278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ app_NewsList)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4458);
// EXTERNAL MODULE: ./app/LiveTimeStamp.tsx
var LiveTimeStamp = __webpack_require__(8128);
var LiveTimeStamp_default = /*#__PURE__*/__webpack_require__.n(LiveTimeStamp);
// EXTERNAL MODULE: ./app/ReadMoreBtn.tsx
var ReadMoreBtn = __webpack_require__(8239);
var ReadMoreBtn_default = /*#__PURE__*/__webpack_require__.n(ReadMoreBtn);
;// CONCATENATED MODULE: ./app/Article.tsx



function Article({ article  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105    hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out",
        children: [
            article?.urlToImage && /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: article?.urlToImage,
                alt: article?.title,
                className: "h-56 w-full object-cover rounded-t-lg shadow-md"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-1 flex flex-col p-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "font-bold font-serif",
                                children: article?.title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("section", {
                                className: "flex-1 mt-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xs line-clamp-6",
                                    children: article?.description
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
                                className: "text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            article?.author,
                                            " -"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((LiveTimeStamp_default()), {
                                            time: article?.publishedAt
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((ReadMoreBtn_default()), {
                        article: article
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const app_Article = (Article);

;// CONCATENATED MODULE: ./app/NewsList.tsx


function NewsList({ news  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10",
        children: news?.articles?.map((article)=>/*#__PURE__*/ jsx_runtime.jsx(app_Article, {
                article: article
            }, article?.title))
    });
}
/* harmony default export */ const app_NewsList = (NewsList);


/***/ }),

/***/ 8239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("C:\\Users\\LENOVO\\projects reactJs\\news_live\\news_live\\app\\ReadMoreBtn.tsx");


/***/ }),

/***/ 9237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7893);

const fetchNews = async (category, keywords, isDynamic)=>{
    //GraphQL query
    const URL_WITH_CATEGORY = `https://newsapi.org/v2/everything?q=${category && category}&apiKey=662a6724c276465e8e487964206f7915`;
    const URL = `https://newsapi.org/v2/everything?q=all&apiKey=662a6724c276465e8e487964206f7915`;
    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__/* .gql */ .Ps`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
    // Fetch function with nextjs 13 caching...
    const res = await fetch(category ? URL_WITH_CATEGORY : URL, {
        method: "GET"
    });
    const newsResponse = await res.json();
    return newsResponse;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchNews);


/***/ }),

/***/ 5141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);


function ReadMoreBtn({ article  }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleClick = ()=>{
        const queryString = Object.entries(article).map(([key, value])=>`${key}=${value}`).join("&");
        const url = `/article?${queryString}`;
        console.log(url);
        router.push(url);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: handleClick,
        className: "bg-orange-400 h-10 rounded-b-lg dark:text-gray-900",
        children: "Read More"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadMoreBtn);


/***/ })

};
;
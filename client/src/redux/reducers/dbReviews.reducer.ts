import { reviewTypes } from "../actions/dbReviews.actions";

const initialState = {
  reviewRating: "",
  reviewTitle: "batman",
  reviewBody:
    "Sweet roll jelly-o tart toffee macaroon. Chupa chups caramels lollipop brownie halvah carrot cake lollipop lemon drops. Soufflé tootsie roll toffee liquorice lemon drops halvah dragée sweet gummi bears. Danish cupcake carrot cake lemon drops. Halvah powder gummi bears pastry candy canes powder. Cake gingerbread jelly marzipan donut chocolate cake danish candy. Tiramisu pudding tootsie roll tart. Pie carrot cake pie croissant wafer oat cake topping jujubes sweet roll. Carrot cake chocolate brownie. Cotton candy candy pastry. Cupcake jujubes danish tiramisu bonbon. Fruitcake marshmallow wafer ice cream gingerbread wafer gingerbread muffin. Muffin croissant jujubes toffee. Wafer chupa chups jelly beans ice cream caramels. Tiramisu oat cake sweet roll toffee toffee chocolate bar topping gummies fruitcake. Chupa chups marzipan muffin sweet roll macaroon sugar plum cupcake. Pastry donut liquorice wafer carrot cake liquorice candy tootsie roll. Ice cream halvah oat cake cake. Croissant gingerbread cake oat cake chocolate cake ice cream. Muffin chocolate donut cupcake croissant ice cream dessert macaroon. Jelly-o marshmallow gummies dessert. Toffee liquorice wafer tootsie roll tart gummi bears pie. Brownie gummi bears muffin chupa chups icing ice cream marshmallow. Cheesecake apple pie liquorice carrot cake. Dessert chocolate candy pie dragée icing marzipan danish. Biscuit jelly lemon drops cake liquorice. Sweet jujubes gummies sugar plum.Wafer chupa chups jelly beans ice cream caramels. Tiramisu oat cake sweet roll toffee toffee chocolate bar topping gummies fruitcake. Chupa chups marzipan muffin sweet roll macaroon sugar plum cupcake. Pastry donut liquorice wafer carrot cake liquorice candy tootsie roll. Ice cream halvah oat cake cake. Croissant gingerbread cake oat cake chocolate cake ice cream. Muffin chocolate donut cupcake croissant ice cream dessert macaroon. Jelly-o marshmallow gummies dessert. Toffee liquorice wafer tootsie roll tart gummi bears pie. Brownie gummi bears muffin chupa chups icing ice cream marshmallow. Cheesecake apple pie liquorice carrot cake. Dessert chocolate candy pie dragée icing marzipan danish. Biscuit jelly lemon drops cake liquorice. Sweet jujubes gummies sugar plum.",
  reviewFirstname: "amy",
  reviewLastname: "smith",
  isOpen: false
};

export const dbReviewsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case reviewTypes.REVIEW_RATING_UPDATE:
      return {
        ...state,
        reviewRating: action.payload.reviewRating
      };
    case reviewTypes.REVIEW_TITLE_UPDATE:
      return {
        ...state,
        reviewTitle: action.payload.reviewTitle
      };
    case reviewTypes.REVIEW_BODY_UPDATE:
      return {
        ...state,
        reviewBody: action.payload.reviewBody
      };
    case reviewTypes.REVIEW_FIRSTNAME_UPDATE:
      return {
        ...state,
        reviewFirstname: action.payload.reviewFirstname
      };

    case reviewTypes.REVIEW_LASTNAME_UPDATE:
      return {
        ...state,
        reviewLastname: action.payload.reviewLastname
      };

    case reviewTypes.SINGLE_REVIEW_ISOPEN:
      return {
        ...state,
        isOpen: !action.payload.isOpen
      };
    default:
      break;
  }
  return initialState;
};

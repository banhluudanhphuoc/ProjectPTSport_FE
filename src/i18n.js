import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    VI: {
        translation: {
            "menu_home": "Trang chủ",
            "menu_categries": "Danh Mục",
            "menu_brands": "Thương Hiệu",
            "menu_blogs": "Tin tức",
            "menu_contact": "liên hệ",
            "menu_login": "đăng nhập",
            "menu_featured": "đặc sắc",
            "menu_clothes": "quần áo",
            "menu_shoes": "Giày",
            "menu_accessories": "phụ kiện",

            "footer_about_us": "Về Chúng Tôi",
            "footer_about_content": "Khám phá PT Sport - nguồn cung cấp trang phục, giày và dụng cụ thể thao hàng đầu của bạn,có các thương hiệu nổi tiếng như Adidas và Nike, ....Chúng tôi là đối tác của bạn trong lĩnh vực thể thao xuất sắc,cung cấp sản phẩm chất lượng và dịch vụ tận tâm.Hãy tham gia cùng chúng tôi trên hành trình năng động của bạn ngay hôm nay!",
            "footer_newsletter": "Bản Tin",
            "footer_newsletter_des": "Luôn cập nhật những thông tin mới nhất của chúng tôi",
            "footer_support": "Hỗ Trợ",
            "footer_support_help": "Trợ giúp & Dịch vụ khách hàng",
            "footer_support_size": "Biểu đồ kích cỡ",
            "footer_support_payments": "Thanh Toán",
            "footer_support_return": "Trả hàng và Hoàn tiền",
            "footer_follow_us": "Theo dõi chúng tôi",
            "footer_silogant1": "Tôn vinh thể thao, Xác định phong cách –",
            "footer_silogant2": "Nơi sự xuất sắc đáp ứng niềm đam mê.",

            "banner_title1": "Bộ sưu tập mới của NIKE!",
            "banner_title2": "Bộ sưu tập mới của ADIDAS!",
            "banner_title3": "Bộ sưu tập mới của PUMA!",
            "banner_content1": " Nike Jordan 1 - Sự lựa chọn dành cho phái nữ bắt kịp xu hướng Sự kết hợp giữa Nike và Jordan đã cho ra đời mẫu Nike Jordan 1 mang tính biểu tượng, tạo nên làn sóng trên thị trường giày thể thao. Phong cách giày sneaker độc đáo của nó bổ sung hoàn hảo cho cá tính sắc sảo của những phụ nữ dẫn đầu xu hướng, tạo thêm nét cá tính và sự tinh tế không gì sánh bằng. Vào năm 2020, Nike Jordan 1 đã trở thành một sự bổ sung thiết yếu cho tủ quần áo của những phụ nữ theo xu hướng thời trang.",
            "banner_content2": " Adidas Falcon Core Black Cloud White B28129 dường như là một mẫu hoặc cách phối màu cụ thể của giày thể thao Adidas Falcon. Mẫu giày sneaker này có thể có phối màu lõi đen và trắng mây, với số kiểu B28129 đóng vai trò là mã nhận dạng duy nhất cho thiết kế cụ thể này. Adidas Falcon được biết đến với hình dáng chunky lấy cảm hứng từ cổ điển và là lựa chọn phổ biến của những người đam mê sneaker vì sự kết hợp giữa thời trang và sự thoải mái.",
            "banner_content3": "Thay vì chọn những chiếc váy có họa tiết hoa tinh tế, nếu bạn muốn có vẻ ngoài quyến rũ, quyến rũ hơn mà không quá lố, hãy cân nhắc việc chọn một chiếc váy hai dây denim sành điệu và sắc sảo. Hãy kết hợp nó với một đôi giày thể thao đích thực dành cho nữ của Puma để có sự kết hợp hoàn hảo giữa sự tinh tế và cá tính!",

            "free_delivery_title": "Giao hàng miễn phí",
            "return_policy_title": "Chính sách hoàn trả",
            "24/7_support_title": "Hỗ trợ 24/7",
            "secure_payment_title": "Thanh toán an toàn",
            "free_delivery": "Miễn phí vận chuyển cho mọi đơn hàng",
            "return_policy": "Chính sách hoàn trả dễ dàng và nhanh chóng",
            "24/7_support": "Hỗ trợ khách hàng nhanh nhất có thể",
            "secure_payment": "Thanh toán được an toàn và bảo mật tuyệt đối",

            "category_featured": "Đặc sắc",
            "category_clothes": "Quần áo",
            "category_accessories": "Phụ kiện",
            "category_shoes": "Giày",
            "category_sale": "Giảm giá",

            "lastest_product": "Sản phẩm mới nhất",
            "comming_product": "Sản phẩm sắp ra mắt",

            "deals_of_the_week": "Ưu đãi trong tuần",


        }
    },
    EN: {
        translation: {
            "menu_home": "home",
            "menu_categries": "categories",
            "menu_brands": "brands",
            "menu_blogs": "blogs",
            "menu_contact": "contact",
            "menu_login": "login",
            "menu_featured": "featured",
            "menu_clothes": "clothes",
            "menu_shoes": "shoes",
            "menu_accessories": "accessories",

            "footer_about_us": "About Us",
            "footer_about_content": "Discover PT Sport – your go-to source for top-tier sportswear, shoes, and gear, featuring renowned brands like Adidas and Nike,.... We're your partner in athletic excellence, offering quality products and dedicated service. Join us on your active journey today!",
            "footer_newsletter": "Newsletter    ",
            "footer_newsletter_des": "Stay update with our latest",
            "footer_support": "Support",
            "footer_support_help": "Help & Customer Service",
            "footer_support_size": "Size Charts",
            "footer_support_payments": "Payment",
            "footer_support_return": "Returns & Refunds",
            "footer_follow_us": "Follow Us",
            "footer_silogant1": "Celebrating Sport, Defining Style –",
            "footer_silogant2": "Where Excellence Meets Passion.",

            "banner_title1": "NIKE New  Collection!",
            "banner_title2": "ADIDAS New  Collection!",
            "banner_title3": "PUMA New  Collection!",
            "banner_content1": " Nike Jordan 1 - The Choice for Trendsetting WomenThe fusion of Nike and Jordan has given birth to the iconic Nike Jordan 1,making waves in the sneaker market. Its unique sneaker style perfectly complements the edgy personalities of trendsetting women, adding a touch of individuality and unmatched flair.In 2020, the Nike Jordan 1 became an essential addition to the wardrobes of fashion-forward women.",
            "banner_content2": " The Adidas Falcon Core Black Cloud White B28129 appears to be a specific model or colorway of Adidas Falcon sneakers.This sneaker model likely features a core black and cloud white color scheme, with the style number B28129 serving as a unique identifier for this particular design.The Adidas Falcon is known for its retro- inspired chunky silhouette and is a popular choice among sneaker enthusiasts for its blend of fashion and comfort.",
            "banner_content3": "Instead of opting for the delicate floral-patterned dresses, if you want to embrace a more seductive, alluring look without going overboard, consider getting a stylish and edgy denim two- strap dress. Pair it with a pair of Puma women's auth sneakers for that perfect blend of sophistication and individuality!",

            "free_delivery_title": "Free Delivery",
            "return_policy_title": "Return Policy",
            "24/7_support_title": "24/7 Support",
            "secure_payment_title": "Secure Payment",
            "free_delivery": "Free Shipping on all order",
            "return_policy": "Easy and fast return policy",
            "24/7_support": "Support customers as quickly as possible",
            "secure_payment": "Payment is safe and absolutely confidential",

            "category_featured": "Featured",
            "category_clothes": "Clothes",
            "category_accessories": "Accessories",
            "category_shoes": "Shoes",
            "category_sale": "Sales off",

            "lastest_product": "Lastest Products",
            "comming_product": "Coming Products",

            "deals_of_the_week": "Deals of the Week",


        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "VI", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
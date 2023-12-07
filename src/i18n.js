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
            "menu_featured": "Đặc Sắc",
            "menu_clothes": "Quần Áo",
            "menu_shoes": "Giày",
            "menu_accessories": "Phụ Kiện",
            "search_here": "Tìm",
            "menu_logout": "Đăng xuất",
            "menu_profile": "Hồ sơ",
            "menu_change_pass": "Đổi mật khẩu",


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

            "add_to_bag": "Mua",
            "out_of_stock": "Hết Hàng",
            "wishlist": "Yêu thích",
            "quick_view": "Xem nhanh",
            "view_more": "Xem chi tiết",
            "close": "Đóng",
            "modal_category": "Danh mục",
            "modal_availibility": "Có sẵn",
            "modal_view_full": "Xem chi tiết đầy đủ",

            "sorting_default": "Mặc định",
            "sorting_price_high": "Giá : Cao - Thấp",
            "sorting_price_low": "Giá : Thấp - Cao",

            "product_detail_description": "Mô tả",
            "product_detail_size_charts": "Biểu đồ kích cỡ",
            "product_detail_comments": "Bình luận",
            "product_detail_reviews": "Đánh giá",
            "product_detail_post_comment": "Đăng bình luận",
            "product_detail_post_comment_name": "Họ và tên",
            "product_detail_post_comment_email": "Địa chỉ email",
            "product_detail_post_comment_number": "Số điện thoại",
            "product_detail_post_comment_message": "Tin nhắn",
            "product_detail_post_comment_review": "Đánh giá",
            "product_detail_post_comment_submit": "Gửi ngay",
            "product_detail_post_review_add": "Thêm đánh giá",
            "product_detail_post_review_rate": "Xếp hạng của bạn",

            "cart_product": "Sản phẩm",
            "cart_price": "Giá",
            "cart_quantity": "Số lượng",
            "cart_total": "Tổng",
            "cart_subtotal": "Tổng cộng",
            "cart_continue_shoping": "Tiếp tục mua sắm",
            "cart_process_checkout": "Tiến hành thanh toán",

            "checkout_billing_detail": "Chi tiết thanh toán",
            "checkout_fullname": "Họ và tên",
            "checkout_number_phone": "Số điện thoại",
            "checkout_email": "Địa chỉ Email",
            "checkout_city": "Thành phố",
            "checkout_district": "Quận",
            "checkout_ward": "Phường/Thị trấn",
            "checkout_city_select": "Chọn Thành phố",
            "checkout_district_select": "Chọn Quận",
            "checkout_ward_select": "Chọn Phường/Thị trấn",
            "checkout_address": "Địa chỉ",
            "checkout_note": "Ghi chú đơn hàng",
            "checkout_your_order": "Đơn đặt hàng của bạn",
            "checkout_your_order_product": "Sản phẩm",
            "checkout_your_order_total": "Tổng cộng",
            "checkout_your_order_subtotal": "Tổng thanh toán",
            "checkout_your_order_cod": "Gửi COD",
            "checkout_your_order_cod_des": "Thanh toán khi nhận hàng.",
            "checkout_your_order_vnpay_des": "Thanh toán qua VNPay nhanh chóng và tiện lợi",
            "checkout_your_order_license1": "Tôi đã đọc và chấp nhận",
            "checkout_your_order_license2": "điều khoản và điều kiện*",
            "checkout_proceed": "Thanh toán",
            "checkout_your_order_quantity": "Số lượng",

            "confirmation_thank": "Cảm ơn bạn. Đơn hàng của bạn đang được xác nhận.",
            "confirmation_order_info": "Thông tin đơn hàng",
            "confirmation_order_number": "Mã đơn hàng",
            "confirmation_date": "Ngày",
            "confirmation_total": "Tổng cộng",
            "confirmation_method": "Phương thức thanh toán",
            "confirmation_shipping_address": "Địa chỉ giao hàng",
            "confirmation_address": "Địa chỉ",
            "confirmation_city": "Thành phố",
            "confirmation_district": "Quận",
            "confirmation_ward": "Phường",
            "confirmation_order_detail": "Chi tiết đơn hàng",
            "confirmation_product": "Sản phẩm",
            "confirmation_quantity": "Số lượng",
            "confirmation_subtotal": "Tổng thanh toán ",
            "confirmation_see_status_order": "Xem trạng thái đơn hàng",


            "login_ques": "Mới vào trang web của chúng tôi",
            "login_plese": "Hãy nhanh tay đăng ký để nhận được nhiều ưu đãi nhất",
            "login_create": "Tạo tài khoản",
            "login_login_to": "Đăng nhập",
            "login_username": "Tên người dùng",
            "login_password": "Mật khẩu",
            "login_keep": "Duy trì trạng thái đăng nhập của tôi",
            "login_forgot": "Quên mật khẩu",
            "login_login": "Đăng nhập",

            "register_ques": "Bạn đã có tài khoản ",
            "register_login": "Đăng nhập",
            "register_register": "Đăng ký",
            "register_username": "Tên người dùng",
            "register_password": "Mật khẩu",
            "register_confirm_password": "Xác nhận mật khẩu",
            "register_fullname": "Họ và tên",
            "register_email": "Địa chỉ email",
            "register_phone_number": "Số điện thoại",
            "register_birthday": "Ngày sinh",
            "register_gender": "Giới tính",

            "contact_address1": "Thành phố Hồ Chí Minh , Tiếng Việt",
            "contact_address2": "12, Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp",
            "contact_work_time": "Từ thứ Hai đến thứ Sáu, 9 giờ sáng đến 6 giờ chiều",
            "contact_email": "Gửi câu hỏi của bạn cho chúng tôi bất kỳ lúc nào!",
            "contact_your_name": "Nhập tên của bạn",
            "contact_your_email": "Nhập địa chỉ email của bạn",
            "contact_subject": "Nhập chủ đề",
            "contact_message": "Nhập tin nhắn",
            "contact_send_message": "Gửi tin nhắn",


            "profile_title": "Xin chào Anh/Chị",
            "profile_phone": "Số điện thoại",
            "profile_edit": "Chỉnh sửa thông tin",
            "profile_my_order": "Đơn hàng của tôi",
            "profile_my_notice": "Thông báo của tôi",
            "profile_my_viewed": "Sản phẩm vừa xem",
            "profile_my_review": "Bài đánh giá của tôi",
            "profile_my_history": "Lịch sử tích lũy điểm",
            "profile_order": "Đặt hàng",
            "profile_product_name": "Tên sản phẩm",
            "profile_product_price": "Giá",
            "profile_product_quantity": "Số lượng",
            "profile_view_order_detail": "Xem chi tiết đơn hàng",
            "profile_order_total": "Tổng cộng",
            "profile_order_pending": "Đơn hàng đang chờ xử lý",
            "profile_order_completed": "Đơn hàng đã hoàn thành",
            "profile_order_cancel": "Đơn hàng đã bị hủy",
            "profile_ordered": "Đã đặt hàng",
            "profile_order_delivering": "Đang giao hàng",
            "profile_order_pay": "Đợi thanh toán",

            "order_detail": "Chi tiết đơn hàng",
            "order_detail_number": "Mã đơn hàng",
            "order_detail_date": "Ngày",
            "order_detail_status": "Trạng thái",
            "order_detail_button_back": "Quay lại",
            "order_detail_button_cancel_order": "Hủy đơn hàng",
            "order_detail_product": "Sản phẩm",
            "order_detail_product_name": "Tên sản phẩm",
            "order_detail_product_price": "Giá",
            "order_detail_product_quantity": "Số lượng",
            "order_detail_shiping_info": "Thông tin vận chuyển",
            "order_detail_shiping_info_name": "Tên",
            "order_detail_shiping_info_phone_number": "Số điện thoại",
            "order_detail_shiping_info_address": "Địa chỉ",
            "order_detail_shiping_info_ward": "Phường/Xã/Thị trấn",
            "order_detail_shiping_info_district": "Quận/Huyện",
            "order_detail_shiping_info_city": "Tỉnh/Thành phố",
            "order_detail_payment_info": "Thông tin thanh toán",
            "order_detail_payment_info_method": "Phương thức thanh toán",
            "order_detail_payment_total": "Tổng số tiền",

            "pageTitle_cart": "Giỏ hàng",
            "pageTitle_news": "Tin tức",
            "pageTitle_category": "Danh mục",
            "pageTitle_brand": "Thương hiệu",
            "pageTitle_checkout": "Thanh toán",
            "pageTitle_confirmation": "Xác nhận",
            "pageTitle_confirm_phone_number": "Xác nhận số điện thoại",
            "pageTitle_contact": "Liên hệ",
            "pageTitle_login": "Đăng nhập",
            "pageTitle_forgot_password": "Quên mật khẩu",
            "pageTitle_order_detail": "Chi tiết đơn hàng",
            "pageTitle_customer_profile": "Hồ sơ khách hàng",
            "pageTitle_customer_profile_edit": "Chỉnh sửa hồ sơ khách hàng",
            "pageTitle_register": "Đăng ký",
            "pageTitle_change_password": "Đổi mật khẩu",
            "pageTitle_wish_list": "Yêu thích",
            "pageTitle_enter_new_password": "Nhập mật khẩu mới",

            "notification_add_product_to_cart_success": "Sản phẩm đã được thêm vào giỏ hàng thành công .Nhấn vào đây để đi tới giỏ hàng ",
            "notification_add_product_to_cart_success_title": "Thành công",

            "forgot_pass_title": "Quên mật khẩu",
            "forgot_pass_email": "Nhập Email",
            "forgot_pass_button": "Gửi mật khẩu mới",

            "enter_new_pass_title": "Nhập mật khẩu mới",
            "enter_new_pass_re_password": "Nhập lại mật khẩu mới",
            "enter_new_pass_button": "Xác nhận thay đổi mật khẩu mới",


            "change_password_new": "Mật khẩu mới",
            "change_password_new_confirm": "Xác nhận mật khẩu mới",
            "change_password_ole": "Mật khẩu cũ",
            "change_password": "Đổi mật khẩu",

            "message_fail_add_wish_list": "Vui lòng đăng nhập để thêm sản phẩm vào danh sách yêu thích",
            "message_failed": "Không thành công",
            "message_success_add_wish_list": "Thêm vào danh sách Yêu thích thành công",
            "message_success": "Thành Công",
            "message_success_delete_wish_list": "Xóa ra khỏi danh sách Yêu thích thành công",
            "message_fail_add_to_cart": "Cần đăng nhập để mua hàng",
            "message_success_delete_to_cart": "Sản phẩm đã được xóa khỏi giỏ hàng",
            "message_total_quantity": "Vượt quá số lượng trong kho",
            "message_success_cancel_order": "Hủy đơn hàng thành công",
            "message_apply_coupon": "Hệ thống đang được nâng cấp",


            "modal_delete_wishlist_title": "Xác nhận xóa sản phẩm",
            "modal_delete_wishlist": "Bạn có chắc chắn muốn xóa sản phẩm này khỏi danh sách Yêu thích?",
            "modal_delete_wishlist_yes": "Xác nhận",
            "modal_delete_wishlist_no": "Hủy",

            "modal_delete_cart_title": "Xác nhận xóa sản phẩm",
            "modal_delete_cart": "Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?",
            "modal_delete_cart_yes": "Xác nhận",
            "modal_delete_cart_no": "Hủy",

            "checkout_validation_name": "Nhập tên !!! (Ít nhất 2 kí tự)",
            "checkout_validation_address": "Nhập địa chỉ giao hàng !!!",
            "checkout_validation_phone_empty": "Nhập số điện thoại nhận hàng !!!",
            "checkout_validation_phone_number_length_10": "Số điện thoại phải có 10 số !!!",
            "checkout_validation_phone_start_0": "Số điện thoại phải bắt đầu bằng số 0 !!!",
            "checkout_validation_city": "Vui lòng chọn Tỉnh/Thành Phố",
            "checkout_validation_district": "Vui lòng chọn Quận/Huyện",
            "checkout_validation_ward": "Vui lòng chọn Phường/Thị Trấn",
            "checkout_validation_method_payment": "Vui lòng chọn phương thức thanh toán",

            "search_result_found": "Không tìm thấy sản phẩm",

            "confirmation_modal_title": "Hủy đơn hàng",
            "confirmation_modal_message": "Bạn có chắc là muốn hủy đơn hàng này không ?",
            "confirmation_modal_button_cancel": "Quay lại",
            "confirmation_modal_button_confirm": "Hủy đơn hàng",
        }
    },
    EN: {
        translation: {
            "menu_home": "Home",
            "menu_categries": "Categories",
            "menu_brands": "Brands",
            "menu_blogs": "News",
            "menu_contact": "Contact",
            "menu_login": "Login",
            "menu_featured": "Featured",
            "menu_clothes": "Clothes",
            "menu_shoes": "Shoes",
            "menu_accessories": "Accessories",
            "search_here": "Search Here",
            "menu_logout": "Log out",
            "menu_profile": "Profile",
            "menu_change_pass": "Change Password",

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

            "add_to_bag": "Add to bag",
            "out_of_stock": "Out of stock",
            "wishlist": "Wishlist",
            "quick_view": "Quick view",
            "view_more": "View more",
            "close": "Close",
            "modal_category": "Category",
            "modal_availibility": "Availibility",
            "modal_view_full": "View full Details",

            "sorting_default": "Default",
            "sorting_price_high": "Price : High - Low",
            "sorting_price_low": "Price : Low - High",

            "product_detail_description": "Description",
            "product_detail_size_charts": "Size Charts",
            "product_detail_comments": "Comments",
            "product_detail_reviews": "Reviews",
            "product_detail_post_comment": "Post a comment",
            "product_detail_post_comment_name": "Full name",
            "product_detail_post_comment_email": "Email Address",
            "product_detail_post_comment_number": "Phone Number",
            "product_detail_post_comment_message": "Message",
            "product_detail_post_comment_review": "Review",
            "product_detail_post_comment_submit": "Submit Now",
            "product_detail_post_review_add": "Add a Review",
            "product_detail_post_review_rate": "Your Rating ",

            "cart_product": "Product",
            "cart_price": "Price",
            "cart_quantity": "Quantity",
            "cart_total": "Total",
            "cart_subtotal": "Total",
            "cart_continue_shoping": "Continue Shopping",
            "cart_process_checkout": "Proceed to checkout",

            "checkout_billing_detail": "Billing Details",
            "checkout_fullname": "Full Name",
            "checkout_number_phone": "Phone Number",
            "checkout_email": "Email Address",
            "checkout_city": "City",
            "checkout_district": "District",
            "checkout_ward": "Ward",
            "checkout_city_select": "Select a city",
            "checkout_district_select": "Select a district",
            "checkout_ward_select": "Select a ward",
            "checkout_address": "Address",
            "checkout_note": "Order Notes",
            "checkout_your_order": "Your Order",
            "checkout_your_order_product": "Product",
            "checkout_your_order_total": "Total",
            "checkout_your_order_subtotal": "Total",
            "checkout_your_order_cod": "Ship COD",
            "checkout_your_order_cod_des": "Payment on delivery.",
            "checkout_your_order_vnpay_des": "Payment via VNPay is quick and convenient ",
            "checkout_your_order_license1": "I’ve read and accept the",
            "checkout_your_order_license2": "terms & conditions*",
            "checkout_proceed": "Proceed",
            "checkout_your_order_quantity": "Quantity",

            "confirmation_thank": "Thank you. Your order has been received.",
            "confirmation_order_info": "Order Info",
            "confirmation_order_number": "Order number",
            "confirmation_date": "Date",
            "confirmation_total": "Total",
            "confirmation_method": "Payment method",
            "confirmation_shipping_address": "Shipping Address",
            "confirmation_address": "Address",
            "confirmation_city": "City",
            "confirmation_district": "District",
            "confirmation_ward": "Ward",
            "confirmation_order_detail": "Order Details",
            "confirmation_product": "Product",
            "confirmation_quantity": "Quantity",
            "confirmation_subtotal": "Total",
            "confirmation_see_status_order": "See order status",

            "login_ques": "New to our website",
            "login_plese": "Please register quickly to receive the most incentives",
            "login_create": "Create an Account",
            "login_login_to": "Log in to enter",
            "login_username": "Username",
            "login_password": "Password",
            "login_keep": "Keep me logged in",
            "login_forgot": "Forgot Password",
            "login_login": "Log In",


            "register_ques": "Do you already have an account ",
            "register_login": "Login",
            "register_register": "Register",
            "register_username": "Username",
            "register_password": "Password",
            "register_confirm_password": "Confirm password",
            "register_fullname": "Fullname",
            "register_email": "Email address",
            "register_phone_number": "Phone number",
            "register_birthday": "Date of Birth",
            "register_gender": "Gender",

            "contact_address1": "Ho Chi Minh City , Vietnamese",
            "contact_address2": "12, Nguyen Van Bao, Ward 4, Go Vap District",
            "contact_work_time": "Mon to Fri 9am to 6 pm",
            "contact_email": "Send us your query anytime!",
            "contact_your_name": "Enter your name",
            "contact_your_email": "Enter your email address",
            "contact_subject": "Enter Subject",
            "contact_message": "Enter Message",
            "contact_send_message": "Send Message",


            "profile_title": "Hello Sir/Madam",
            "profile_phone": "Phone Number",
            "profile_edit": "Edit information",
            "profile_my_order": "My Orders",
            "profile_my_notice": "My notice",
            "profile_my_viewed": "Just viewed product",
            "profile_my_review": "My review",
            "profile_my_history": "Point accumulation history",
            "profile_order": "Order",
            "profile_product_name": "Product name",
            "profile_product_price": "Price",
            "profile_product_quantity": "Quantity",
            "profile_view_order_detail": "View order details",
            "profile_order_total": "Total",
            "profile_order_pending": "Order is pending",
            "profile_order_completed": "Order completed",
            "profile_order_cancel": "Order was cancelled",
            "profile_ordered": "Ordered",
            "profile_order_delivering": "Delivering",
            "profile_order_pay": "Wait for pay",

            "order_detail": "Order Details",
            "order_detail_number": "Order Number",
            "order_detail_date": "Date",
            "order_detail_status": "Status",
            "order_detail_button_back": "Back",
            "order_detail_button_cancel_order": "Cancel order",
            "order_detail_product": "Products",
            "order_detail_product_name": "Product name",
            "order_detail_product_price": "Price",
            "order_detail_product_quantity": "Quantity",
            "order_detail_shiping_info": "Shipping Information",
            "order_detail_shiping_info_name": "Name",
            "order_detail_shiping_info_phone_number": "Phone number",
            "order_detail_shiping_info_address": "Address",
            "order_detail_shiping_info_ward": "Ward",
            "order_detail_shiping_info_district": "District",
            "order_detail_shiping_info_city": "City",
            "order_detail_payment_info": "Payment Information",
            "order_detail_payment_info_method": "Payment Method",
            "order_detail_payment_total": "Total Amount",

            "pageTitle_cart": "Cart",
            "pageTitle_news": "News",
            "pageTitle_category": "Category",
            "pageTitle_brand": "Brand",
            "pageTitle_checkout": "Checkout",
            "pageTitle_confirmation": "Confirmation",
            "pageTitle_confirm_phone_number": "Confirm Phone Number",
            "pageTitle_contact": "Contact",
            "pageTitle_login": "Login",
            "pageTitle_forgot_password": "Forgot Password",
            "pageTitle_order_detail": "Order Details",
            "pageTitle_customer_profile": "Customer Profile",
            "pageTitle_customer_profile_edit": "Edit Customer Profile",
            "pageTitle_register": "Register",
            "pageTitle_change_password": "Change Password",
            "pageTitle_wish_list": "Wishlist",
            "pageTitle_enter_new_password": "Enter new password",

            "notification_add_product_to_cart_success": "The product has been successfully added to the cart.Click to go to Cart",
            "notification_add_product_to_cart_success_title": "Successfully",

            "forgot_pass_title": "Forgot Password",
            "forgot_pass_email": "Enter Email",
            "forgot_pass_button": "Send new password",

            "enter_new_pass_title": "Enter new password",
            "enter_new_pass_re_password": "Re-enter new password",
            "enter_new_pass_button": "Confirm new password change",

            "change_password_new": "New Password",
            "change_password_new_confirm": "Confirm New Password",
            "change_password_ole": "Old Password",
            "change_password": "Change Password",

            "message_fail_add_wish_list": "Please log in to add product to wishlist",
            "message_failed": "Failed",
            "message_success_add_wish_list": "Successfully added to Wish list",
            "message_success": "Success",
            "message_success_delete_wish_list": "Successfully removed from Wish list",
            "message_fail_add_to_cart": "Need to log in to purchase",
            "message_success_delete_to_cart": "The product has been removed from the cart",
            "message_total_quantity": "Exceeded quantity in stock",
            "message_success_cancel_order": "Order canceled successfully",
            "message_apply_coupon": "Hệ thống đang được nâng cấp",

            "modal_delete_wishlist_title": "Confirm product deletion",
            "modal_delete_wishlist": "Are you sure you want to remove this product from your Wishlist?",
            "modal_delete_wishlist_yes": "Confirm",
            "modal_delete_wishlist_no": "Cancel",

            "modal_delete_cart_title": "Confirm product deletion",
            "modal_delete_cart": "Are you sure you want to delete this product from the cart?",
            "modal_delete_cart_yes": "Confirm",
            "modal_delete_cart_no": "Cancel",

            "checkout_validation_name": "Enter name !!! (At least 2 characters)",
            "checkout_validation_address": "Enter shipping address !!!",
            "checkout_validation_phone_empty": "Enter delivery phone number!!!",
            "checkout_validation_phone_number_length_10": "Phone number must have 10 digits !!!",
            "checkout_validation_phone_start_0": "Phone number must start with 0 !!!",
            "checkout_validation_city": "Please select Province/City",
            "checkout_validation_district": "Please select a District",
            "checkout_validation_ward": "Please select Ward/Town",
            "checkout_validation_method_payment": "Please select a payment method",

            "search_result_found": "Product not found",

            "confirmation_modal_title": "Cancel order",
            "confirmation_modal_message": "Are you sure you want to cancel this order?",
            "confirmation_modal_button_cancel": "Back",
            "confirmation_modal_button_confirm": "Cancel order",

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
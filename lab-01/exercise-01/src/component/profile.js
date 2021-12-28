import '../assets/css/style.css';
import avatar from '../assets/image/tuhuugiang.jpg';

function Profile() {
    return (
        <div class="container">
            <div class="avatar">
                <img src={avatar}/>
            </div>
            <div class="introduce">
                <p><span>Họ và tên: </span> Từ Hữu Giang</p>
                <p><span>Giới tính: </span> Nam</p>
                <p><span>Số điện thoại: </span> 0392790428</p>
                <p><span>Địa chỉ: </span> Bình Định</p>
                <p><span>Email: </span> tugiang340@gmail.com</p>
                <p><span>Facebook/Zalo: </span> Từ Hữu Giang</p>
            </div>
        </div>
    )
}
export default Profile;
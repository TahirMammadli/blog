import angryWojak from '../ActivityBar/angryWojak.jpg'
import classes from './ChatBar.module.css'

const ChatBar  = () => {
return(
    <div className={classes.container}>
        <ul>
            <li className={classes.chatListItem}>
                <img
                    src={angryWojak}
                    alt="myImage"
                    className={classes.pfp}
                    style={{ width: "50px", height: "50px", borderRadius: "100px" }}
                />
                <div className={classes.chatList}>
                    <div><b>theweedman</b></div>
                    <div>lmao</div>
                </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
)
}
export default ChatBar
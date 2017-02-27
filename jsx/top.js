/**
 * Created by fanzy05 on 2017/2/20.
 */
var Top = React.createClass({
    render: function() {
        return (
            <div>
                <ul className="nav">
                    <li  className="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" className="dropdown-toggle"><i className="icon icon-user"></i>  <span className="text">欢迎</span><b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="icon-user"></i> My Profile</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="icon-check"></i> My Tasks</a></li>
                            <li className="divider"></li>
                            <li><a href="login.html"><i className="icon-key"></i> Log Out</a></li>
                        </ul>
                    </li>
                    <li className="dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" className="dropdown-toggle"><i className="icon icon-envelope"></i> <span className="text">消息</span> <span className="label label-important">5</span> <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a className="sAdd" title="" href="#"><i className="icon-plus"></i> 新消息</a></li>
                            <li className="divider"></li>
                            <li><a className="sInbox" title="" href="#"><i className="icon-envelope"></i> inbox</a></li>
                            <li className="divider"></li>
                            <li><a className="sOutbox" title="" href="#"><i className="icon-arrow-up"></i> outbox</a></li>
                            <li className="divider"></li>
                            <li><a className="sTrash" title="" href="#"><i className="icon-trash"></i> trash</a></li>
                        </ul>
                    </li>
                    <li className=""><a title="" href="#"><i className="icon icon-cog"></i> <span className="text">设置</span></a></li>
                    <li className=""><a title="" href="login.html"><i className="icon icon-share-alt"></i> <span className="text">退出</span></a></li>
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <Top name="top" />,
    document.getElementById('user-nav')
);
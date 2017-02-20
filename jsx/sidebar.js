/**
 * Created by fanzy05 on 2017/2/20.
 */

var Side = React.createClass({
    render: function() {
        return (
            <div id="sidebar"><a href="#" className="visible-phone"><i className="icon icon-home"></i> Dashboard2</a>
                <ul>
                    <li ><a href="index.html"><i className="icon icon-home"></i> <span>Dashboard</span></a> </li>
                    <li> <a href="charts.html"><i className="icon icon-signal"></i> <span>Charts &amp; graphs</span></a> </li>
                    <li> <a href="widgets.html"><i className="icon icon-inbox"></i> <span>Widgets</span></a> </li>
                    <li><a href="tables.html"><i className="icon icon-th"></i> <span>Tables</span></a></li>
                    <li><a href="grid.html"><i className="icon icon-fullscreen"></i> <span>Full width</span></a></li>
                    <li className="submenu"> <a href="#"><i className="icon icon-th-list"></i> <span>Forms</span> <span className="label label-important">3</span></a>
                        <ul>
                            <li><a href="form-common.html">Basic Form</a></li>
                            <li><a href="form-validation.html">Form with Validation</a></li>
                            <li><a href="form-wizard.html">Form with Wizard</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
<Side name="side" />,
    document.getElementById('sidebar')
);
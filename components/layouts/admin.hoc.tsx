import { Component } from "react";
import AdminContent from "./admin.content";
import AdminHeader from "./admin.header";
import AdminSidebar from "./admin.menu";

export default class AdminHOC extends Component {
  props: any;

  render() {
    return (
      <div>
        <AdminHeader />
        <AdminSidebar />
        <AdminContent title={this.props.contentTitle}>
          {this.props.children}
        </AdminContent>
      </div>
    );
  }
}

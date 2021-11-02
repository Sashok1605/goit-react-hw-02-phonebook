(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactList:"ContactList_contactList__1-wWl"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__3737b",formLabel:"ContactForm_formLabel__3qocJ",formInput:"ContactForm_formInput__2b17D",buttonSubmit:"ContactForm_buttonSubmit__1D_lr"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=n(13),s=n(3),u=n(4),l=n(6),m=n(5),b=n(11),d=n(22),f=n(2),h=n.n(f),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({id:Object(d.a)()},a,c))},t.findByName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.findByName(n)?alert("".concat(n," is already in contacts!")):(t.props.onSubmit(t.state),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(j.jsxs)("label",{className:h.a.formLabel,children:["Name",Object(j.jsx)("input",{className:h.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:h.a.formLabel,children:["Number",Object(j.jsx)("input",{className:h.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",className:h.a.buttonSubmit,children:"Add contact"})]})}}]),n}(a.Component),C=p,O=n(7),_=n.n(O),v=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeletContact;return Object(j.jsxs)("li",{className:_.a.contactListItem,children:[Object(j.jsxs)("p",{className:_.a.contact,children:[" ",e,": ",n]}),Object(j.jsx)("button",{className:_.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},x=n(12),g=n.n(x),L=function(t){var e=t.contacts,n=t.onDeletContact;return Object(j.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)(v,{id:e,name:a,number:c,onDeletContact:n},e)}))})},S=n(9),y=n.n(S),N=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:y.a.filterLabel,children:["Find contacts by name",Object(j.jsx)("input",{className:y.a.filterInput,type:"text",name:"filter",value:e,onChange:n})]})},I=(n(19),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){var n=e.id,a=e.name,c=e.number;t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{id:n,name:a,number:c}])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(C,{contacts:e,onSubmit:this.formSubmitHandler}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(N,{value:n,onChange:this.changeFilter}),Object(j.jsx)(L,{contacts:a,onChange:this.changeFilter,onDeletContact:this.deleteContact})]})}}]),n}(a.Component)),D=I;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__LWT0G",contact:"ContactListItem_contact__30p3v",buttonDelete:"ContactListItem_buttonDelete__3iUz9"}},9:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__1a86f",filterInput:"Filter_filterInput__1IW9v"}}},[[20,1,2]]]);
//# sourceMappingURL=main.a64fabc6.chunk.js.map
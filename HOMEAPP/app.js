//Task getElementById video-12
// const listen_items= document.getElementById("items_add");

// const listen_button=document.getElementById("Add_buttons");

// const add_items=document.getElementById("list_data")

// listen_button.addEventListener('click', ()=>{

//     add_items.innerHTML +=`<li> ${listen_items.value.toUpperCase()} </li>`
// })












//Task getElementsByClassName video-13
// const getListData=document.getElementsByClassName("datas");
// const a=[];

//      for(var i=0; i<getListData.length; i++){
    
//      a.push(getListData[i].innerText);
   
       
//      }
//      console.log(a);

//      const b=[].map.call(getListData, (food)=> food.textContent);
//      console.log(b);












//querySelector video-----15

// const list_data=document.querySelector("li");
// console.log(list_data);
// const list_data1=document.querySelector("li:last-child");
// console.log(list_data1);

// //querySelectorAll

// const all_list=document.querySelectorAll("li");
// console.log(all_list);//it will process as the node list










//Creating Dom Elements in js  video--16

//part-1
// const update_node=document.getElementById("updated");
// const creating_div=document.createElement("div");
// const node_data=document.createTextNode("Data has been Added");
// creating_div.className='jana';
// creating_div.append(node_data);

// update_node.append(creating_div);

// console.log(creating_div);


//part-2
// const listen_items= document.getElementById("items_add");

// const listen_button=document.getElementById("Add_buttons");

// const add_items=document.getElementById("list_data")

// listen_button.addEventListener('click', ()=>{
     
//     const create_ele=document.createElement("li");
//      const inputs=document.createTextNode(listen_items.value)

//     create_ele.className="datas";
//     create_ele.append(inputs);
//     add_items.append(create_ele);

   
// })














//video--17 diff between innerHTML,innerText,innerContent

// const innertext=document.getElementById('updated');
// const person='this is jana'
// innertext.innerText=`<p> ohh ${person} learning </p>`;
// innertext.innerText='<p> ohh ${person} learning </p>';


// const innerhtml=document.getElementById('updated');
// innerhtml.innerHTML=`<p> ${person} learning </p>`;
// innerhtml.innerHTML='<p> ${person} learning </p>';



// const text=document.getElementById('updated');
// const person="ohh my god";
// text.textContent=`<p> text ${person} Jana is learning </p>`;
// text.textContent='<p> text Jana is learning </p>';



// textContents: is all text contained by an element and all its children that are for formatting purposes only.
// innerText: returns all text contained by an element and all its child elements.
// innerHtml: returns all text, including html tags, that is contained by an element.











//video--18 createElement vs innerHTML 

//creating element
// const refer=document.getElementById('updated');
// const data=document.createElement('p');
// const update=document.createTextNode("this is jana and updated")
// data.id='update';
// data.append(update);
// refer.append(data);
// console.log(typeof refer);//object



// //creating innerHTML

// const refer1=document.getElementById('iam');
// const data1=`<p>Hee this is jana and updated</p>`
// refer1.innerHTML +=data1
// console.log(typeof data1);//string wasted








//video--19 creating documentFragment for memory storage

// const allData=document.getElementById('list_data');
// //creating element in DOM

// const data=["jana","sathish","kirna","ruban","yogi","anand","seveb","eight","hello","logu"]
// console.time("normal way")
// for(let i=0; i<data.length; i++){
// const ele=document.createElement('li');
// const pushData=document.createTextNode(`names: ${data[i]}`);
// ele.className='datas';
// ele.append(pushData);
// allData.append(ele);
// }
// console.timeEnd("normal way");



// console.time("docFragementway")
// const docFrag=document.createDocumentFragment();

// for(let i=0; i<data.length; i++){
//     const ele=document.createElement('li');
//     const pushData=document.createTextNode(`names: ${data[i]}`);
//     ele.className='datas';
//     ele.append(pushData);
//     docFrag.append(ele);
// }

//     allData.append(docFrag);
// console.timeEnd("docFragementway");









//Video-20 and 21 inserting DOM elements where ever we want 

//video---20

//there are four ways we can fetch the created elements in an DOM



// append
// prepend 
// before 
// after


//before and after are recently invented....

// const items_adding=document.getElementById('list_data');

// //creating element to append and prepend the elements
// const create_ele=document.createElement('li');
// const tex_node=document.createTextNode('janardhanan R S')
// create_ele.className='new_name';
// create_ele.append(tex_node);


//append
// items_adding.append(create_ele);

//prepend
// items_adding.prepend(create_ele)

//before
// items_adding.before(create_ele);

//after
// items_adding.after(create_ele);


//before and after are new version of the system.. old version is there

//it will work same as it is before and afet
// items_adding.parentNode.insertBefore(create_ele, items_adding);
// items_adding.parentNode.insertBefore(create_ele, items_adding.nextSibling);



//video---21
// const items_adding=document.getElementById('list_data');


//insertAdjacentHTML
// items_adding.insertAdjacentHTML("beforebegin",`<li class="new"> janardhanan R S </li>`);
// items_adding.insertAdjacentHTML("afterend",`<li class="new"> janardhanan R S </li>`);


// items_adding.insertAdjacentHTML("beforeend",`<li class="new"> janardhanan R S </li>`);
// items_adding.insertAdjacentHTML("afterbegin",`<li class="new"> janardhanan R S </li>`);


//insertAdjacentText
// items_adding.insertAdjacentText("beforebegin",`janardhanan R S`);
// items_adding.insertAdjacentText("afterend",`janardhanan R S`);


// items_adding.insertAdjacentText("beforeend",`janardhanan R S`);
// items_adding.insertAdjacentText("afterbegin",` janardhanan R S `);


//insertingAdjacentElement
// const created_ele=document.createElement('li');
// created_ele.textContent='is an data';
// created_ele.className='jana';

// items_adding.insertAdjacentElement("beforebegin",created_ele);
// items_adding.insertAdjacentElement("afterend",created_ele);


//items_adding.insertAdjacentElement("beforeend",created_ele);
// items_adding.insertAdjacentElement("afterbegin",created_ele);


















// video -22  replacing the elements in DOM....

// const all_items=document.getElementById('list-data');

// //creating new element for replacement purpose

// const create_ele=document.createElement('li');
// const text_rpl=document.createTextNode("jana in first item replaced");
// create_ele.className="datas";
// create_ele.append(text_rpl);

// const create_ele1=document.createElement('li');
// const text_rpl1=document.createTextNode("sathish in first item replaced");
// create_ele1.className="datas";
// create_ele1.append(text_rpl1);

// //get the element which node u want to replace...
// const get_data=document.querySelector('.list_data :first-child');

// // get_data.replaceWith(create_ele);

// // get_data.parentNode.replaceChild(create_ele,get_data);

// get_data.replaceChildren(create_ele,create_ele1);//multiple elements we can push in one children





//video-23 clone the data in js

// const listen_input=document.getElementById('items_add');
// const listen_button=document.getElementById('Add_buttons');
// const listen_list=document.getElementById('list_data');

// listen_button.addEventListener('click',()=>{

//     const create_ele=document.createElement('li');
//     const data_text=document.createTextNode(listen_input.value);
//     create_ele.className='datas'
//     create_ele.append(data_text);
//     listen_list.append(create_ele);


// })
 

// const listen_Sync_button=document.getElementById('cr_button');

// const listen_dup=document.getElementById('duplicate');

// listen_Sync_button.addEventListener('click' ,()=>{
//     listen_dup.innerHTML='';
    
// const cloned=listen_list.cloneNode(true);
// listen_dup.append(cloned);

// } )












//removing the elements in an DOM----video-25

// const listen_input_user=document.getElementById('items_add');
// const listen_my_button=document.getElementById('Add_buttons');
// const get_user_data=document.getElementById('list_data');

// listen_my_button.addEventListener('click', ()=>{

//     //create element manually
//     const list=document.createElement('li');
//     list.className='datas';
//     const element=document.createElement('div');
//     const text=document.createTextNode(listen_input_user.value.toUpperCase());
//     element.append(text);
    

//     const first_div=document.createElement('div');
    
//     first_div.innerHTML=` <i class="fa fa-trash"></i>`;
//     first_div.className='dle';
//     list.append(element,first_div)
//     get_user_data.append(list);

//     first_div.parentElement.setAttribute("onclick","removingItem(event)")

// //     <li class="datas">
// //     <div>CARS</div>
// //     <div onclick="removingItem(event)"  class="dle"> 
// //       <i class="fa fa-trash"></i>
// //   </div>
// })

// function removingItem(event){
// let dleItem=event.target.parentNode.parentNode;
// dleItem.remove();

// }







//video-25 traversing the DOM elements 

// const get_items=document.querySelectorAll(".list_data li");
// console.log(get_items);

// for(let items of get_items){
//     console.log(items.innerText);
// }

// get_items.forEach((find) =>console.log(find.innerText));

// const items=Array.from(get_items).forEach((find) =>console.log(find.innerText));
// console.log(items);

// const itemss=[...get_items].forEach( food =>{
//     console.log(food.innerText);
// })




//video---27 finding the child DOM elements

// const listen_parent=document.querySelector(".list_data");
// console.log(listen_parent.childNodes);
// console.log(listen_parent.children);
// console.log(listen_parent.childElementCount);
// console.log(listen_parent.length);
// console.log(listen_parent);
// console.log(listen_parent.className);
// console.log(listen_parent.classList);
// console.log(typeof listen_parent);
// console.log(listen_parent.firstChild);
// console.log(listen_parent.firstElementChild);


// const listen_par=document.querySelectorAll(".list_data");
// console.log(listen_par);
// console.log(listen_par.children);

// const list_data=document.querySelectorAll("li");
// console.log(list_data.length);



//video-28   finding DOM parent elements

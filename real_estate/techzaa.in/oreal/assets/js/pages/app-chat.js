class Chat{initStatus(){new Swiper(".mySwiper",{loop:!1,pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:"auto",spaceBetween:8,autoHeight:!0})}initChats(){const a=this;this.chatContainer=document.querySelector(".chat-conversation-list"),this.simplebar=new SimpleBar(this.chatContainer),this.scrollPosition=0,this.scrollToBottom(!1);const e=document.querySelector("form#chat-form"),i=e.querySelector("input");e.addEventListener("submit",function(e){e.preventDefault();const s=i.value;0<s.trim().length&&(i.value="",a.sendMessage(s))}),this.simplebar.getScrollElement()&&(this.simplebar.getScrollElement().onscroll=function(e){a.scrollPosition=e.target.scrollTop})}sendMessage(e){const s=this;e=this.toNodes(this.createHTMLMessageFromMe(e));this.simplebar.getContentElement()&&(this.simplebar.getContentElement().appendChild(e),this.simplebar.recalculate(),this.scrollToBottom(),setTimeout(function(){s.receiveMessage("Server is not connected 😔")},1e3))}receiveMessage(e){e=this.toNodes(this.createHTMLMessageFromOther(e));this.simplebar.getContentElement().appendChild(e),this.simplebar.recalculate(),this.scrollToBottom()}createHTMLMessageFromMe(e){const s=new Date;return`<li class="d-flex justify-content-end gap-2 clearfix odd">
                                                  <div class="chat-conversation-text ms-0">
                                                       <div>
                                                            <p class="mb-2">${s.getHours()+":"+s.getMinutes()+" "+(11<s.getHours()?"pm":"am")} <span class="text-dark fw-medium ms-1">You</span> </p>
                                                       </div>
                                                       <div class="d-flex justify-content-end">
                                                            <div class="chat-conversation-actions dropdown dropstart">
                                                                 <a href="javascript: void(0);" class="pe-1" data-bs-toggle="dropdown" aria-expanded="false"><i class='ri-more-2-fill fs-18'></i></a>
                                                                 <div class="dropdown-menu">
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-share-forward-line me-2"></i>Reply
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-share-line me-2"></i>Forward
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-file-copy-line me-2"></i>Copy
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-bookmark-line me-2"></i>Bookmark
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-star-line me-2"></i>Starred
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-information-2-line me-2"></i>Mark as Unread
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-delete-bin-line me-2"></i>Delete
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                            <div class="chat-ctext-wrap">
                                                                 <p> ${e} </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="chat-avatar text-center">
                                                       <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar rounded-circle">
                                                  </div>
                                             </li>`}createHTMLMessageFromOther(e){const s=new Date;return`<li class="d-flex gap-2 clearfix">
                                                <div class="chat-avatar text-center">
                                                    <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar rounded-circle">
                                                </div>
                                                  <div class="chat-conversation-text ms-0">
                                                       <div>
                                                            <p class="mb-2"> <span class="text-dark fw-medium me-1">David</span>${s.getHours()+":"+s.getMinutes()+" "+(11<s.getHours()?"pm":"am")} </p>
                                                       </div>
                                                       <div class="d-flex justify-content-start">
                                                        <div class="chat-ctext-wrap">
                                                                    <p> ${e} </p>
                                                                </div>
                                                            <div class="chat-conversation-actions dropdown dropstart">
                                                                 <a href="javascript: void(0);" class="pe-1" data-bs-toggle="dropdown" aria-expanded="false"><i class='ri-more-2-fill fs-18'></i></a>
                                                                 <div class="dropdown-menu">
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-share-forward-line me-2"></i>Reply
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-share-line me-2"></i>Forward
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-file-copy-line me-2"></i>Copy
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-bookmark-line me-2"></i>Bookmark
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-star-line me-2"></i>Starred
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-information-2-line me-2"></i>Mark as Unread
                                                                      </a>
                                                                      <a class="dropdown-item" href="javascript: void(0);">
                                                                           <i class="ri-delete-bin-line me-2"></i>Delete
                                                                      </a>
                                                                 </div>
                                                            </div>                                                            
                                                       </div>
                                                  </div>
                                                 
                                             </li>`}toNodes(e){return(new DOMParser).parseFromString(e,"text/html").body.childNodes[0]}scrollToBottom(e=!0){const s=this;if(this.simplebar.getContentElement()){const a=this.simplebar.getContentElement().scrollHeight-570;const i=setInterval(function(){s.scrollPosition+=2,s.simplebar.getScrollElement().scrollTop=s.scrollPosition,s.scrollPosition>a&&clearInterval(i)},e?10:1)}}init(){this.initStatus(),this.initChats()}}document.addEventListener("DOMContentLoaded",function(e){(new Chat).init()});
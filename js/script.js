function openTabContent(event, tabs){
  let i, tabContent , tabLinks ,defaultTab// early initial variable 

  tabContent = document.getElementsByClassName("tabContent")

  for(i =0 ; i< tabContent.length;i++ ){
    tabContent[i].style.display ='none'
  }
  
  tabLinks = document.getElementsByClassName("tabLinks")
  
  for(i =0 ; i< tabLinks.length;i++ ){
    tabLinks[i].className = tabLinks[i].className.replace("active","")
  }

  const selected = document.getElementById(tabs)
  if(selected){
    selected.style.display = "block"
    selected.style.display = "flex"

  }
  
  event.currentTarget.className += " active"

  
}



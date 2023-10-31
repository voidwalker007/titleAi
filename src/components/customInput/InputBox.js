import React from 'react'


export const InputBox = (props) => {
  return (
    <div class="containerInput d-flex border-none">
    <input placeholder="" value={props.value}type="text"/>  
</div>
  )
}

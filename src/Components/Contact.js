import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="first">Email</label>
          <input type="text" class="form-control" placeholder="" id="first"></input>
        </div>
        <div class="form-group">
          <label for="first">Phone</label>
          <input type="number" class="form-control" placeholder="" id="first"></input>
        </div>
      </div>
            
        </div>
        <div class="form-horizontal">
    <div class="row">
        <div class="col-md-6">
            <textarea class="form-control" rows="5" placeholder="Enter Your Requirements" required></textarea>
        </div>
    </div>
    
</div> 
<div>
    <p></p>
</div>
    <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        
      
        </div>
    )
}

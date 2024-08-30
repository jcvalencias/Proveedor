import React from "react";
import PreLoader from "../Structure/Preloader";
import Header from "../Structure/Header";
import Footer from "../Structure/Footer";


const AddListing = () => {
    return (
        <>
        <PreLoader/>
        <Header/>
        {/* <!--====== Start Hero Section ======--> */}
        <section class="hero-area">
            <div class="breadcrumbs-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="page-title">
                                <h1 class="title">Add Listing</h1>
                                <ul class="breadcrumbs-link">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">Listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--====== End Hero Section ======--> */}
        {/* <!--====== Start Add Listing Section ======--> */}
        <section class="fioxen-add-listing pt-120 pb-120">
            <div class="container">
                <form>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="add-listing-form general-listing-form mb-60 wow fadeInUp">
                                <h4 class="title">General Information</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Place Name" name="name" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <select class="wide">
                                                <option value="01">Museums</option>
                                                <option value="02">Restaurant</option>
                                                <option value="03">Party Center</option>
                                                <option value="04">Fitness Zone</option>
                                                <option value="05">Game Field</option>
                                                <option value="06">Job & Feeds</option>
                                                <option value="07">Shooping</option>
                                                <option value="08">Art Gallery</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Keywords" name="keywords" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form_group">
                                            <textarea class="form_control" placeholder="Description" name="discription"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-listing-form details-listing-form mb-60 wow fadeInUp">
                                <h4 class="title">Details Information</h4>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Name" name="name" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="email" class="form_control" placeholder="Email" name="email" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Phone" name="phone" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="url" class="form_control" placeholder="Website" name="website" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Designation" name="name" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Company" name="name" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="url" class="form_control" placeholder="Facebook (Optional)" name="website" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="url" class="form_control" placeholder="Twitter (Optional)" name="website" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="url" class="form_control" placeholder="Linked (Optional)" name="website" required/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form_group">
                                            <input type="url" class="form_control" placeholder="Skype (Optional)" name="website" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-listing-form upload-listing-form mb-60 wow fadeInUp">
                                <h4 class="title">Gallery Images</h4>
                                <p>Click here or drope files to upload</p>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="form_group file-input-one">
                                            <input type="file" name="Image"/>
                                            <div class="upload-content">
												<div class="upload-title-icon d-flex align-items-center justify-content-center">
                                                    <img src="assets/images/elements/input-1.png" alt="Image"/>
												</div>
											</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form_group file-input-one">
                                            <input type="file" name="Image"/>
                                            <div class="upload-content">
												<div class="upload-title-icon d-flex align-items-center justify-content-center">
                                                    <img src="assets/images/elements/input-1.png" alt="Image"/>
												</div>
											</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form_group file-input-one">
                                            <input type="file" name="Image"/>
                                            <div class="upload-content">
												<div class="upload-title-icon d-flex align-items-center justify-content-center">
                                                    <img src="assets/images/elements/input-1.png" alt="Image"/>
												</div>
											</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form_group file-input-two">
                                            <input type="file" name="Video"/>
                                            <div class="upload-content">
												<div class="upload-title-icon d-flex align-items-center justify-content-center">
                                                    <img src="assets/images/elements/input-2.png" alt="Image"/>
                                                    <span>Add Video +</span>
												</div>
											</div>
                                        </div>
                                        <div class="form_group file-input-two">
                                            <input type="file" name="Image"/>
                                            <div class="upload-content">
												<div class="upload-title-icon d-flex align-items-center justify-content-center">
                                                    <img src="assets/images/elements/input-3.png" alt="Image"/>
                                                    <span>Add Video +</span>
												</div>
											</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-listing-form amenities-listing-form mb-60 wow fadeInUp">
                                <h4 class="title">Amenities</h4>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="form_group">
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check1" name="checkbox" checked/>
                                                <label for="check1"><span>Alarm system</span></label>
                                            </div>
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check2" name="checkbox"/>
                                                <label for="check2"><span>Alarm system</span></label>
                                            </div>
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check3" name="checkbox"/>
                                                <label for="check3"><span>Alarm system</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form_group">
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check4" name="checkbox"/>
                                                <label for="check4"><span>Janitor</span></label>
                                            </div>
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check5" name="checkbox"/>
                                                <label for="check5"><span>Onsite management</span></label>
                                            </div>
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check6" name="checkbox"/>
                                                <label for="check6"><span>Janitor</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form_group">
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check7" name="checkbox"/>
                                                <label for="check7"><span>Depanneur in building</span></label>
                                            </div>
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check8" name="checkbox"/>
                                                <label for="check8"><span>Depanneur in building</span></label>
                                            </div>
                                            <div class="single-checkbox d-flex">
                                                <input type="checkbox" id="check9" name="checkbox"/>
                                                <label for="check9"><span>Depanneur in building</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-listing-form map-form mb-60 wow fadeInUp">
                                <div class="map-box">
                                    <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe> 
                                </div>
                            </div>
                            <div class="add-listing-form timing-listing-form mb-60 wow fadeInUp">
                                <h4 class="title">Opening Hours</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="timeing-list">
                                            <h5>Monday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                        <div class="timeing-list">
                                            <h5>Tuesday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                        <div class="timeing-list">
                                            <h5>Wednesday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                        <div class="timeing-list">
                                            <h5>Thursday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                        <div class="timeing-list">
                                            <h5>Friday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                        <div class="timeing-list">
                                            <h5>Saturday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                        <div class="timeing-list">
                                            <h5>Saturday<span class="time">08 am - 05 pm</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button text-center">
                                <button class="main-btn icon-btn">Submit Listing</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        {/* <!--====== End Add Listing Section ======-->); */}
        <Footer/>
        </>
    );
}


export default AddListing;
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Auth from './Auth'
import Footer from './Footer'
import api from '../api'
import './style.css'
import { validateName, validatePhone, validateAddress, validatePincode } from '../util/helpers'
import { NAME_ERROR_MESSAGE, PHONE_ERROR_MESSAGE, ADDRESS_ERROR_MESSAGE, ZIP_ERROR_MESSAGE } from '../util/constants'

const Checkout = ({ history }) => {

    const [values, setValues] = useState({
        fname: '',
        phone: '',
        address: '',
        area: '',
        landmark: '',
        city: '',
        zip: '',
        fnameError: false,
        phoneError: false,
        addressError: false,
        areaError: false,
        landmarkError: false,
        cityError: false,
        zipError: false
    })


    const { fname, phone, address, area, landmark, city, zip, fnameError, phoneError, addressError, areaError, landmarkError, cityError, zipError } = values

    const handleOnChange = name => (e) => {
        setValues({
            ...values,
            [name]: e.target.value,
            fnameError: false,
            phoneError: false,
            addressError: false,
            areaError: false,
            landmarkError: false,
            cityError: false,
            zipError: false
        })
    }

    const placeOrder = (e) => {
        e.preventDefault()

        const nameIsValid = validateName(fname);
        const phoneIsValid = validatePhone(phone);
        const addressIsValid = validateAddress(address);
        const pinIsValid = validatePincode(zip);

        if (!nameIsValid) {
            setValues({ ...values, fnameError: true })
        } else if (!phoneIsValid) {
            setValues({ ...values, phoneError: true })
        } else if (!addressIsValid) {
            setValues({ ...values, addressError: true })
        } else if (area === '') {
            setValues({ ...values, areaError: true })
        } else if (landmark === '') {
            setValues({ ...values, landmarkError: true })
        } else if (city === '') {
            setValues({ ...values, cityError: true })
        } else if (!pinIsValid) {
            setValues({ ...values, zipError: true })
        }
    }

    return (
        <div>
            <Auth />
            <Navbar />
            <section id="checkout">
                <div className="container py-5 shadow-lg bg-body">
                    <div className="row gx-2">
                        <div className="col-lg-8">
                            <p>Enter your address</p>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label class="form-label">Full Name (First and Last name)*</label>
                                    <input type="text" class="form-control" name="fname" onChange={handleOnChange("fname")} />
                                    {fnameError ? <span>{NAME_ERROR_MESSAGE}</span> : null}
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Mobile number*</label>
                                    <input type="text" class="form-control" placeholder="10 digit mobile number without prefix" name="phone" onChange={handleOnChange("phone")} />
                                    {phoneError ? <span>{PHONE_ERROR_MESSAGE}</span> : null}
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Flat, House no., Building, Company, Apartment*</label>
                                    <input type="text" class="form-control" placeholder="1234 Main St" name="address" onChange={handleOnChange("address")} />
                                    {addressError ? <span>{ADDRESS_ERROR_MESSAGE}</span> : null}
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Area, Colony, Street, Sector, Village*</label>
                                    <input type="text" class="form-control" placeholder="Apartment, studio, or floor" name="area" onChange={handleOnChange("area")} />
                                    {areaError ? <span>Area error</span> : null}
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Landmark</label>
                                    <input type="text" class="form-control" placeholder="e.g. Near AIIMS Flyover, Behind Regal Cinema, etc." name="landmark" onChange={handleOnChange("landmark")} />
                                    {landmarkError ? <span>Landmark error</span> : null}
                                </div>

                                <div class="col-md-6">
                                    <label class="form-label">Town/City*</label>
                                    <input type="text" class="form-control" name="city" onChange={handleOnChange("city")} />
                                    {cityError ? <span>City error</span> : null}
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Zip*</label>
                                    <input type="text" class="form-control" placeholder="6 digits [0-9] PIN code" name="zip" onChange={handleOnChange("zip")} />
                                    {zipError ? <span>{ZIP_ERROR_MESSAGE}</span> : null}
                                </div>
                                <div class="mt-5 d-flex">
                                    <button type="submit" class="btn btn-success w-50 mx-auto" onClick={placeOrder}>PROCEED TO BUY</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-3 p-2 mx-auto d-flex align-self-start flex-column border shadow-lg bg-body">
                            <div className="col-12">
                                <table class="table borderless">
                                    <tbody>
                                        <tr>
                                            <td className="border-0">Item(s) Total</td>
                                            <td className="text-end border-0">
                                                Rs. {'ZZZZ'}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Delivery Charges</td>
                                            <td className="text-end">Free</td>
                                        </tr>

                                        <tr>
                                            <td className="border-0">
                                                Amount Payable
                                                <p style={{ fontSize: '.6rem' }}>INCLUSIVE OF ALL TAXES</p>
                                            </td>
                                            <td className="text-end border-0">{'XXXX'}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-0">
                                                <span>Payment mode COD</span>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Checkout

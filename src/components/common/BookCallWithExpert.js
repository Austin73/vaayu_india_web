"use client";

import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";

const BookCallWithExpert = ({ onSubmit, className = "", showCloseButton }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    contactNumber: "",
    email: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const { closeModal } = useModal();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters.";
    } else {
      const companyNameRegex = /^[a-zA-Z0-9\s.,'-]+$/;
      if (!companyNameRegex.test(formData.companyName)) {
        newErrors.companyName = "Company name contains invalid characters.";
      }
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required.";
    } else {
      const phoneDigits = formData.contactNumber.replace(/[^\d]/g, "");
      const phoneRegex = /^[\d+\-\s]+$/;
      if (!phoneRegex.test(formData.contactNumber)) {
        newErrors.contactNumber = "Contact number contains invalid characters.";
      } else if (phoneDigits.length < 10) {
        newErrors.contactNumber = "Contact number must have at least 10 digits.";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email address is invalid.";
      }
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  return (
    <div className={`mx-auto max-w-xl rounded-xl p-2 ${className}`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-black">Book A Call With Expert</h2>
        {showCloseButton && (
          <button
            onClick={closeModal}
            className="hover:bg-primary-700 h-8 w-8 rounded-full border border-gray-300 text-xs font-bold text-gray-600 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-5">
            <div className="flex-1">
              <label htmlFor="firstName" className="mb-1 block text-sm font-semibold text-black">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Firstname"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              {errors.firstName && (
                <small className="mt-1 text-xs text-red-500">{errors.firstName}</small>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="mb-1 block text-sm font-semibold text-black">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Lastname"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              {errors.lastName && (
                <small className="mt-1 text-xs text-red-500">{errors.lastName}</small>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="companyName" className="mb-1 block text-sm font-semibold text-black">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter Company name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {errors.companyName && (
              <small className="mt-1 text-xs text-red-500">{errors.companyName}</small>
            )}
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-5">
            <div className="flex-1">
              <label
                htmlFor="contactNumber"
                className="mb-1 block text-sm font-semibold text-black"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              {errors.contactNumber && (
                <small className="mt-1 text-xs text-red-500">{errors.contactNumber}</small>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-black">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              {errors.email && <small className="mt-1 text-xs text-red-500">{errors.email}</small>}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-black">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
            className="h-4 w-4 cursor-pointer"
          />
          <label htmlFor="agreeTerms" className="cursor-pointer text-xs font-normal">
            We value your trust. By confirming this call, you agree to our{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-black underline"
            >
              Terms &amp; Conditions
            </a>
            .
          </label>
        </div>
        {errors.agreeTerms && (
          <small className="mt-1 text-xs text-red-500">{errors.agreeTerms}</small>
        )}
        <button
          type="submit"
          className="bg-primary hover:bg-primary-700 w-full rounded-full py-3 text-base font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={
            !formData.firstName.trim() ||
            !formData.lastName.trim() ||
            !formData.companyName.trim() ||
            !formData.contactNumber.trim() ||
            !formData.email.trim() ||
            !formData.agreeTerms
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookCallWithExpert;

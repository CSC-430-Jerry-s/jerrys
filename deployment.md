# CSC430 - Software Engineering

# Jerry's Ecommerce

## Team MKJJA

# Deployment Plan

**December 2025**

**Version 1.1**

---

## Revision History

*Note: The revision history cycle begins once changes or enhancements are requested after the Deployment Plan has been baselined.*

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | December 10, 2025 | Amna | Initial draft |
| 1.1 | December 12, 2025 | Mubarak | Added Site Readiness, Resources, and Training sections |

---

## Artifact Rationale

This plan explains how our team will deploy and maintain our e-commerce website, Jerry's Streetwear, from the moment we prepare it for release all the way through launch and ongoing support. It outlines the steps we'll follow to get the site up and running, including testing, hosting setup, and making sure all core features work smoothly in the live environment. The document also describes each team member's role during deployment, the timeline we're working with, and what resources we need. In addition, the plan covers how we will monitor the website after launch, handle any issues that come up, and push updates when needed. To sum up, the goal is to make the transition from development to a working live website as smooth and organized as possible for both our team and future users.

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 [Purpose](#11-purpose)
   - 1.2 [Key Definitions](#12-key-definitions)
   - 1.3 [Plan Overview](#13-plan-overview)
   - 1.4 [Assumptions](#14-assumptions)
2. [Roles and Responsibilities](#2-roles-and-responsibilities)
3. [Schedule](#3-schedule)
   - 3.1 [Timeline](#31-timeline)
4. [Site Readiness Assessment](#4-site-readiness-assessment)
   - 4.1 [Deployment Overview](#41-deployment-overview)
   - 4.2 [Site Information (Locations, Deployment Recipients)](#42-site-information-locations-deployment-recipients)
   - 4.3 [Site Preparation](#43-site-preparation)
   - 4.4 [Assessment of Deployment Readiness](#44-assessment-of-deployment-readiness)
5. [Resources](#5-resources)
   - 5.1 [Facility Specifics](#51-facility-specifics)
   - 5.2 [Hardware - End User Requirements](#52-hardware---end-user-requirements)
   - 5.3 [Hardware - Server/Hosting Requirements](#53-hardware---serverhosting-requirements)
   - 5.4 [Software - End User Requirements](#54-software---end-user-requirements)
   - 5.5 [Software - Server/Development Requirements](#55-software---serverdevelopment-requirements)
6. [Documentation and Training](#6-documentation-and-training)
   - 6.1 [Documentation](#61-documentation)
   - 6.2 [Training](#62-training)
7. [Approval Signatures](#7-approval-signatures)

---

## 1. Introduction

This document describes the plan to deploy and install the Jerry's Ecommerce application as managed through the Jerry's Ecommerce project. This document is a companion to the project management plan for this effort.

### 1.1 Purpose

The purpose of this plan is to provide a single, common document that describes how, when, where, and to whom the Jerry's Ecommerce application will be deployed and installed. Appropriate communications planning should also be completed, as well as the training plan and rollout schedule.

### 1.2 Key Definitions

**Deployment Design.** Phase of the solution life cycle in which architectural design and implementation specifications are developed and tested. The preparation of plans and specifications necessary to implement the solution are part of the Deployment Design phase. At the end of the Deployment Design phase, a solution is ready for implementation in the production environment.

**Implementation.** Phase of the solution life cycle in which the newly designed or changed hardware, software, functionality, or process is installed into the production environment and activated. The specifications and plans created during Deployment Design steer the work that is performed during the Implementation phase.

**Release.** Release baseline is defined as the product build (software and hardware specifications) along with the body of documents that support testing, installation, operations, training, and support of the product. Projects will determine the release baseline early in the development cycle. Baseline components enter change control once the project is approved for deployment.

### 1.3 Plan Overview

Deployment and installation of Jerry's Ecommerce is planned as an online, phased rollout to our project stakeholders and potential users.

Deployment will be performed by Jerry's Development Team, with the help from classmates or peer reviewers as needed. Installation will be handled by the Jerry's Development Team, including tasks like hosting setup, database configuration, and final testing before launch.

### 1.4 Assumptions

The Deployment Plan is developed with the following assumptions:

1. All hosting costs, domain fees, database usage fees, and any other expenses needed to deploy the website will be identified and covered before launch. We expect no delays caused by missing funds or account setup issues.

2. The development team will complete full testing of the website prior to deployment, including user login, product browsing, cart functionality, checkout simulations, and responsiveness across devices.

3. Release Management will certify production readiness based upon the level of testing that has occurred prior to deployment. As part of the release baseline, this information will be identified in the release profile.

4. A simple training guide or short walkthrough video will be created before deployment so team members and future maintainers know how to update products, manage the backend, and troubleshoot common issues.

5. All team members will have access to the hosting platforms (Render, Vercel/Netlify, Supabase) ahead of time so deployment can happen smoothly without permission delays.

6. Internet connectivity and platform reliability (Render, Vercel, Supabase) are assumed to remain stable during the deployment period.

7. All code pushed to the main branch before deployment is assumed to be reviewed and tested by at least one other teammate.

8. Users will access the site through standard web browsers, so no special local installations or device configurations are required.

---

## 2. Roles and Responsibilities

For the deployment of Jerry's Ecommerce, our team will handle all tasks related to preparing, installing, testing, and launching the website. Since this is a student project, there are no outside vendors or field technicians involved—our development team is responsible for every step. The main responsibilities include planning the deployment timeline, preparing the hosting environment, testing the system, documenting the process, and making sure the website launches smoothly.

**Who is involved:** All five team members — Kayla, Mubarak, Amna, Jerry, and Jolie.

**Teams involved:** Product Development (frontend, backend, database), QA/Testing, Deployment/Hosting.

**Who is in charge:** Jerry (Team Lead), with all members contributing equally to tasks under their assigned role.

### Table 1: Deployment Roles and Responsibilities

| Team Member | Role | Responsibilities |
|-------------|------|------------------|
| Jerry | Team Lead / Product Owner | Oversees planning and deployment; final approval of features; coordinates team activities |
| Kayla | Frontend Developer | Frontend setup and UI readiness; ensures responsive design works across devices |
| Mubarak | Backend Developer / Deployment Lead | Backend deployment and server configuration; manages Render hosting setup |
| Amna | Database Administrator / Deployment Support | Database management (PostgreSQL on Render); environment variables configuration |
| Jolie | QA/Testing Lead | Testing and reporting issues; validates all features before launch |

---

## 3. Schedule

This section outlines the timeline and major milestones for deploying Jerry's Ecommerce. Our goal is to complete all deployment activities within one week, including testing, setup, installation, and the final launch review. Each task is scheduled so the team can identify issues early and complete the rollout smoothly.

### 3.1 Timeline

The deployment and installation is scheduled to run for one week from **December 15, 2025** to **December 22, 2025** as depicted in the master deployment schedule below.

| Phase | Task | Start Date | End Date | Owner |
|-------|------|------------|----------|-------|
| 1 | Final code review and merge to main | Dec 15, 2025 | Dec 15, 2025 | All Team |
| 2 | Clear test data from production database | Dec 16, 2025 | Dec 16, 2025 | Mubarak, Amna |
| 3 | Populate production product catalog | Dec 16, 2025 | Dec 17, 2025 | Mubarak, Amna |
| 4 | Deploy backend to Render | Dec 17, 2025 | Dec 17, 2025 | Mubarak |
| 5 | Deploy frontend to Render | Dec 17, 2025 | Dec 18, 2025 | Kayla, Mubarak |
| 6 | End-to-end testing in production | Dec 18, 2025 | Dec 19, 2025 | Jolie, All Team |
| 7 | Bug fixes and final adjustments | Dec 19, 2025 | Dec 20, 2025 | All Team |
| 8 | UAT and stakeholder review | Dec 20, 2025 | Dec 21, 2025 | Jerry, Professor |
| 9 | Official launch and handoff | Dec 22, 2025 | Dec 22, 2025 | Jerry |

*The master deployment schedule is available at the project GitHub repository.*

---

## 4. Site Readiness Assessment

### 4.1 Deployment Overview

The Jerry's Streetwear e-commerce application will be deployed to a **cloud-hosted environment using Render**. This deployment includes:

- **Frontend:** React application hosted on Render Static Site
- **Backend:** Node.js/Express API hosted on Render Web Service
- **Database:** PostgreSQL database hosted on Render

The application will be **publicly accessible** via a Render-provided URL and is intended for use by:

- Professor and classmates (CSC 430 course evaluation)
- Jerry (Team Lead/Product Owner) for final acceptance review
- General public for demonstration purposes

A **live demonstration** will be conducted in the classroom as part of the project presentation.

### 4.2 Site Information (Locations, Deployment Recipients)

| Site | Description | URL | Target Users |
|------|-------------|-----|--------------|
| Production (Render) | Cloud-hosted public deployment | TBD (Render URL) | Professor, classmates, Jerry, public |
| Classroom Demo | Live presentation environment | Same as production | Professor, classmates |
| Local Development | Developer testing environment | `http://localhost:5173` | Development team only |

### 4.3 Site Preparation

The following table describes preparation required prior to deployment:

| Preparation Task | Description | Responsible Party | Status |
|------------------|-------------|-------------------|--------|
| Clear test/dummy data | Remove all test users and sample data from production database | Mubarak, Amna | Pending |
| Create production accounts | Set up 1 test customer account and 1 admin account for production use | Mubarak, Amna | Pending |
| Populate product catalog | Upload actual product images and real product data | Mubarak, Amna | Pending |
| Configure environment variables | Set DATABASE_URL and other secrets in Render dashboard | Mubarak, Amna | Complete |
| Verify database connectivity | Confirm backend can connect to Render PostgreSQL | Mubarak, Amna | Complete |
| Deploy frontend to Render | Build and deploy React application | Mubarak, Kayla | Pending |
| Deploy backend to Render | Deploy Express API server | Mubarak | Pending |
| End-to-end testing | Verify all features work in production environment | Team MKJJA | Pending |

### 4.4 Assessment of Deployment Readiness

Deployment readiness will be assessed using the following checklist:

| # | Readiness Criteria | Verified By | Date | Status |
|---|-------------------|-------------|------|--------|
| 1 | Frontend builds without errors | Mubarak | | ☐ |
| 2 | Backend starts and connects to database | Amna | | ☐ |
| 3 | User authentication (login/signup/logout) works | Team | | ☐ |
| 4 | Product catalog displays correctly | Team | | ☐ |
| 5 | Shopping cart functions properly | Team | | ☐ |
| 6 | Checkout with address validation works | Team | | ☐ |
| 7 | Order tracking returns correct data | Team | | ☐ |
| 8 | Application is accessible via public URL | Mubarak, Amna | | ☐ |
| 9 | UAT test cases pass | Jolie | | ☐ |
| 10 | Jerry (Product Owner) approves | Jerry | | ☐ |

---

## 5. Resources

### 5.1 Facility Specifics

| Facility | Requirements | Notes |
|----------|--------------|-------|
| Classroom (Demo) | Projector/display screen, internet access, presenter laptop | For live demonstration during class presentation |
| Cloud Infrastructure | Render platform access | No physical facilities required; application is cloud-hosted |

*No special facilities are required. The application is cloud-hosted and accessible from any location with internet connectivity.*

### 5.2 Hardware - End User Requirements

The following table describes hardware specifications required for end users to access the application:

| Component | Minimum Requirement | Recommended |
|-----------|---------------------|-------------|
| Device | Any laptop, desktop, tablet, or smartphone | Laptop or desktop for best experience |
| Processor | Any modern processor (2015 or newer) | N/A |
| RAM | 2 GB minimum | 4 GB+ |
| Display | Any screen size | 1024x768 or higher resolution |
| Internet | Basic broadband connection (1 Mbps+) | Stable connection (5 Mbps+) |
| Input | Keyboard, mouse, or touchscreen | N/A |

*Please see the Roles and Responsibilities table in Section 2 for details about who is responsible for communicating these requirements to users.*

### 5.3 Hardware - Server/Hosting Requirements

| Component | Specification | Provider |
|-----------|---------------|----------|
| Web Server | Cloud-hosted infrastructure | Render |
| Database Server | Managed PostgreSQL instance | Render |
| Storage | As provided by Render free/paid tier | Render |
| Scaling | Auto-managed by Render | Render |

*Note: Server hardware is fully managed by Render cloud platform. No physical hardware provisioning is required by the team.*

### 5.4 Software - End User Requirements

The following table describes software specifications required for end users:

| Software | Requirement | Version | Notes |
|----------|-------------|---------|-------|
| Web Browser | Required | Any modern browser | Chrome, Firefox, Safari, Edge (latest 2 versions recommended) |
| JavaScript | Required | Enabled | Must be enabled in browser settings |
| Cookies | Required | Enabled | Required for session management and cart functionality |
| Email Account | Required for checkout | N/A | Users must have valid email to complete orders (no guest checkout implemented) |
| User Account | Optional | N/A | Users may create an account or use test accounts provided in README |

*Please see the Roles and Responsibilities table in Section 2 for details about who is responsible for communicating these requirements to users.*

### 5.5 Software - Server/Development Requirements

The following table describes software specifications for the server environment:

| Software | Version | Purpose | License |
|----------|---------|---------|---------|
| Node.js | v18.0 or higher | Backend runtime environment | MIT (Open Source) |
| npm | v9.0 or higher | Package management | MIT (Open Source) |
| PostgreSQL | v14 or higher | Database management system | PostgreSQL License (Open Source) |
| React | v19.x | Frontend framework | MIT (Open Source) |
| React Router | v7.x | Client-side routing | MIT (Open Source) |
| Express.js | v4.x | Backend web framework | MIT (Open Source) |
| Vite | v6.x | Frontend build tool | MIT (Open Source) |

---

## 6. Documentation and Training

This section describes the products and processes planned to provide product documentation and training.

### 6.1 Documentation

| Document | Description | Location | Audience |
|----------|-------------|----------|----------|
| README.md | Primary project documentation including setup instructions, test accounts, and UAT test scripts | GitHub Repository (`/README.md`) | Developers, Testers, Evaluators |
| UAT Document | User Acceptance Test cases and scripts | Project deliverable (`/uat_doc.txt`) | UAT Team, Professor |
| Deployment Plan | This document - deployment procedures and requirements | Project deliverable (`/DEPLOYMENT_PLAN.md`) | Team, Professor, Stakeholders |

### 6.2 Training

| Training Type | Description | Audience | Delivery Method |
|---------------|-------------|----------|-----------------|
| Live Demo | Walkthrough of all application features during class presentation | Professor, Classmates | In-person classroom demonstration |
| README Guide | Step-by-step setup and testing instructions | Developers, Testers | Self-service (GitHub README) |
| Test Accounts | Pre-configured accounts for immediate testing without signup | All users | Documented in README |

*No formal training sessions are required beyond the live demonstration. Users can access the application immediately using test accounts or by creating their own account. The README provides comprehensive instructions for setup and testing.*

---

## 7. Approval Signatures

This section is used to document the approval of the Deployment Plan during the Formal Review. The review should be conducted face to face where signatures can be obtained 'live' during the review.

---

**Team Lead / Product Owner**

Signed: ________________________________________________________________

Name: Jerry                                                     Date: ________________

---

**Deployment Lead**

Signed: ________________________________________________________________

Name: Mubarak                                                   Date: ________________

---

**Deployment Support / Database Administrator**

Signed: ________________________________________________________________

Name: Amna                                                      Date: ________________

---

**Frontend Developer**

Signed: ________________________________________________________________

Name: Kayla                                                     Date: ________________

---

**QA/Testing Lead**

Signed: ________________________________________________________________

Name: Jolie                                                     Date: ________________

---

**Professor / Course Instructor**

Signed: ________________________________________________________________

Name: ________________________________                          Date: ________________

---

**REVIEW DATE:** ________________

**SCRIBE:** ________________

---

## Appendix A: Test Accounts for UAT

The following test accounts are available for User Acceptance Testing:

| Email | Password | Role |
|-------|----------|------|
| `jane.doe@example.com` | `hashed_jane_pass` | Customer |
| `john.smith@example.com` | `hashed_john_pass` | Customer |
| `mike.brown@example.com` | `hashed_mike_pass` | Customer |
| `sarah.lee@example.com` | `hashed_sarah_pass` | Customer |
| `admin@example.com` | `hashed_admin_pass` | Admin |

*Note: For production deployment, test accounts will be reduced to 1 customer and 1 admin account.*

---

## Appendix B: Technology Stack Summary

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | React + Vite | React 19, Vite 6 |
| Routing | React Router | v7.x |
| Backend | Node.js + Express | Node 18+, Express 4.x |
| Database | PostgreSQL | v14+ (hosted on Render) |
| Hosting | Render | Cloud Platform |
| Version Control | Git + GitHub | Latest |

---

*Document End*

**CSC 430 - Software Engineering Project © 2025**

**Team MKJJA - Jerry's Streetwear**
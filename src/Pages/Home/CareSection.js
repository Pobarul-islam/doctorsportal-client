import React from 'react';
import treatment from '../../assets/images/treatment.png'
const CareSection = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row gap-20">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of using Lorem <br /> Ipsumis that it has a more-or-less normal distribution of letters,as opposed to <br /> using 'Content here, content here', making it look like readable English. Many <br /> desktop publishing packages and web page</p>
      <button class="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default CareSection;
import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const CareSection = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of using Lorem <br /> Ipsumis that it has a more-or-less normal distribution of letters,as opposed to <br /> using 'Content here, content here', making it look like readable English. Many <br /> desktop publishing packages and web page</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default CareSection;
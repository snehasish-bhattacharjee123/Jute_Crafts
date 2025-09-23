import React from 'react';

const Card = ({ title, description, image, badge, featured = false, className = '' }) => {
  return (
    <div className={`relative bg-bgLight rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${featured ? 'ring-2 ring-gold/50' : ''} ${className}`}>
      {image && (
        <div className="relative">
          {badge && (
            <span className="absolute top-3 left-3 z-10 text-xs font-semibold bg-gold text-secondary px-2 py-1 rounded-full shadow">
              {badge}
            </span>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-textDark mb-3">
          {title}
        </h3>
        <p className="font-body text-base text-textDark leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
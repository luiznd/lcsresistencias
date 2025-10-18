import { motion } from 'framer-motion';

interface ImageSliceProps {
  src: string;
  sliceIndex: number;
  totalSlices: number;
  className?: string;
}

const ImageSlice = ({ 
  src, 
  sliceIndex, 
  totalSlices, 
  className = '' 
}: ImageSliceProps) => {
  const sliceHeight = 100 / totalSlices;
  const yPosition = sliceIndex * sliceHeight;

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: sliceIndex * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `center ${-yPosition}%`,
          backgroundSize: `100% ${totalSlices * 100}%`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

interface ImageSlicesProps {
  imageSrc: string;
  sliceCount?: number;
  className?: string;
  sliceClassName?: string;
  layout?: 'vertical' | 'horizontal' | 'grid';
}

const ImageSlices = ({
  imageSrc,
  sliceCount = 4,
  className = '',
  sliceClassName = '',
  layout = 'vertical'
}: ImageSlicesProps) => {
  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-row space-x-2';
      case 'grid':
        return `grid grid-cols-2 gap-2 ${slices > 4 ? 'md:grid-cols-3' : ''}`;
      default:
        return 'flex flex-col space-y-2';
    }
  };

  const getSliceClasses = () => {
    switch (layout) {
      case 'horizontal':
        return `flex-1 h-64 ${sliceClassName}`;
      case 'grid':
        return `aspect-square ${sliceClassName}`;
      default:
        return `w-full h-32 ${sliceClassName}`;
    }
  };

  const slices = sliceCount;

  return (
    <div className={`${getLayoutClasses()} ${className}`}>
      {Array.from({ length: slices }, (_, index) => (
        <ImageSlice
          key={index}
          src={imageSrc}
          sliceIndex={index}
          totalSlices={slices}
          className={getSliceClasses()}
        />
      ))}
    </div>
  );
};

export default ImageSlices;

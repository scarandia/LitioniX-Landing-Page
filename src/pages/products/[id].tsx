import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  CircularProgress,
  IconButton
} from '@mui/material';
import { Header } from '@/components/header';
import { products } from '../productList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Product {
  description: string;
  _id: string;
  name: string;
  images: string[];
  category: string;
  techSheetUrl?: string;
  info?: { label: string; value: string }[];
  comingSoon?: boolean;
}

const ProductDetail = (): JSX.Element => {
  const router = useRouter();
  const { id, category } = router.query;
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const product = products.find(p => p._id === id) as Product | undefined;

  const scrollThumbnails = (direction: 'left' | 'right'): void => {
    const container = thumbnailContainerRef.current;
    if (container) {
      const scrollAmount = 100;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  if (router.isFallback) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: { xs: 2, md: 4 }, minHeight: '80vh' }}>
          <Typography variant="h4" color="error">
            Producto no encontrado
          </Typography>
          {/* <Button
            variant="outlined"
            onClick={() => router.push('/productList')}
            sx={{ mt: 2 }}
            startIcon={<ArrowBackIcon />}
          >
            Volver a Productos
          </Button> */}
        </Box>
      </>
    );
  }

  const productImages = product.images;

  return (
    <>
      <Header />
      <Box sx={{
        maxWidth: 'xl', mx: 'auto', p: { xs: 2, md: 4 }, minHeight: '80vh', bgcolor: theme.palette.mode === 'dark' ? '#0d1117' : '#f5f5f5'
      }}>
        <Button
          variant="outlined"
          onClick={() => {
            if (category) {
              router.push(`/productList?category=${category}`);
            } else {
              router.push('/productList');
            }
          }}
          sx={{ mb: 3 }}
          startIcon={<ArrowBackIcon />}
        >
          Volver a Productos
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                mb: 2,
                height: '400px',
                position: 'relative',
                background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme.shadows[2],
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: theme.shadows[4],
                }
              }}
            >
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                priority
                style={{
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </Box>

            {/* Thumbnail gallery */}
            {productImages.length > 1 && (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <IconButton onClick={() => scrollThumbnails('left')}>
                  <ChevronLeftIcon />
                </IconButton>

                <Box
                  ref={thumbnailContainerRef}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    overflowX: 'auto',
                    py: 1,
                    flexGrow: 1,
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                      height: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: theme.palette.divider,
                      borderRadius: '3px',
                    }
                  }}
                >
                  {productImages.map((img, index) => (
                    <Box
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      sx={{
                        width: 80,
                        height: 80,
                        minWidth: 80,
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: selectedImage === index ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                        opacity: selectedImage === index ? 1 : 0.8,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          opacity: 1,
                          borderColor: theme.palette.primary.light
                        }
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={80}
                        style={{
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </Box>
                  ))}
                </Box>

                <IconButton onClick={() => scrollThumbnails('right')}>
                  <ChevronRightIcon />
                </IconButton>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={700} mb={2}>
              {product.name}
            </Typography>

            {product.comingSoon && (
              <Box
                sx={{
                  backgroundColor: theme.palette.warning.light,
                  color: theme.palette.warning.contrastText,
                  p: 2,
                  borderRadius: '8px',
                  mb: 3,
                  fontWeight: 600,
                  textAlign: 'center'
                }}
              >
                Este modelo llegará próximamente. ¡Mantente atento para más novedades!
              </Box>
            )}

            <Typography variant="body1" paragraph mb={3}>
              Categoría: {product.category}
            </Typography>

            <Typography variant="body1" paragraph mb={3}>
              {product.description}
            </Typography>


            <Typography variant="body1" paragraph mb={3}>
              Este producto pertenece a nuestra línea de {product.category.toLowerCase()}.
              Contáctenos para más información sobre especificaciones técnicas y disponibilidad.
            </Typography>

            {/* Tabla Informacion del producto */}
            {product.info && product.info.length > 0 && (
              <Box
                sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                  p: 3,
                  borderRadius: '8px',
                  mb: 4,
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: theme.shadows[1],
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Características Técnicas
                </Typography>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {product.info.map((item, idx) => {
                      const isPrice =
                        item.label.toLowerCase().includes('precio') ||
                        item.label.toLowerCase().includes('precio2');

                      return (
                        <tr
                          key={idx}
                          style={{
                            backgroundColor: isPrice ? '#fff3cd' : 'transparent', // Fondo amarillo suave para destacar
                          }}
                        >
                          <td
                            style={{
                              padding: '8px',
                              fontWeight: isPrice ? 700 : 500,
                              color: isPrice ? '#d9534f' : 'inherit', // Texto rojo para precio
                              borderBottom: '1px solid #ccc',
                            }}
                          >
                            {item.label}
                          </td>
                          <td
                            style={{
                              padding: '8px',
                              fontWeight: isPrice ? 700 : 'normal',
                              color: isPrice ? '#d9534f' : 'inherit',
                              borderBottom: '1px solid #ccc',
                            }}
                          >
                            {item.value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <Box sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.1)' : 'rgba(25, 118, 210, 0.05)',
                  p: 3,
                  borderRadius: '8px',
                  mb: 3
                }}>
                  <Typography variant="h6" gutterBottom>
                    ¿Interesado en este producto?
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Contáctenos para más información sobre disponibilidad, precios y especificaciones técnicas.
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    mt: 2,
                    boxShadow: theme.shadows[2],
                    '&:hover': {
                      boxShadow: theme.shadows[4],
                    }
                  }}
                  onClick={() => {
                    router.push('/#contactos');
                  }}
                >
                  Consultar sobre este producto
                </Button>
                {product.techSheetUrl && (
                  <Box mt={3}>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      Ficha Técnica del Vehículo
                    </Typography>
                    <Button
                      component="a"
                      href={product.techSheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      color="primary"
                      sx={{
                        textTransform: 'none',
                        fontWeight: 500
                      }}
                    >
                      Descargar Ficha Técnica (PDF)
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Grid>
          )
        </Grid>
      </Box>
    </>
  );
};

export default ProductDetail;

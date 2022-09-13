import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 860,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
  fontFamily: "SpoqaHanSansNeo-Regular",
};

const Button = styled("button")`
  display: block;
  width: fit-content;
`;

const Img = styled("img")`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 15px;
  top: 15px;
  right: 15px;
  opacity: 0.7;
  cursor: pointer;
`;

const Div1 = styled("div")`
  display: flex;
  flex-direction: row;
  height: 320px;
  gap: 30px;
`;

const A = styled("a")`
  display: block;
  font-size: 14px;
  color: #1976d2;
  padding-bottom: 10px;
`;

const Typography1 = styled(Typography)`
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
`;

const Loading = styled(CircularProgress)`
  display: block;
  margin: 0 auto;
`;

const Title = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  font-family: "SpoqaHanSansNeo-Regular";
  padding-bottom: 32px;
`;

export default function DetailModal({ thumbnail, name, id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (id && id > 0 && open) {
      getItem();
    }
  }, [id, open]);

  const baseURL = `http://localhost:9000/stores/${id}`;
  const getItem = async () => {
    try {
      const response = await axios.get(baseURL);
      setDetail(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  };
  return (
    <>
      <Button>
        <img src={thumbnail} alt={name} onClick={handleOpen} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Img
              src="/image/closeModal.svg"
              alt="모달 닫기"
              onClick={handleClose}
            />
            {isLoading && <Loading />}
            {!isLoading && (
              <Div1>
                {isLoading && <p>Loading...</p>}
                <img src={detail.image} alt="" />
                <div>
                  <Title
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {detail.name}
                  </Title>
                  {detail.url && <A href={detail.url}>🚀 사이트 바로가기</A>}
                  <Typography1>{detail.description}</Typography1>
                </div>
              </Div1>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

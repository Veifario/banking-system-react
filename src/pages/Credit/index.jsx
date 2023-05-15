import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserDetails } from "../../api/getRequest";
import { userDetails } from "../../redux/actions";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { Box, Button, Modal, Typography } from "@mui/material";
import SettingModal from "./SettingModal";
import AllCreditsModal from "./AllCreditsModal";
import NewCreditModal from "./NewCreditModal";

const Credit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userDetails);

  const [settingModal, setSettingModal] = useState(false);
  const [allCreditsModal, setAllCreditsModal] = useState(false);
  const [newCreditModal, setNewCreditModal] = useState(false);

  const getUser = async () => {
    const data = await getUserDetails(params.id);
    dispatch(userDetails(data));
  };

  useEffect(() => {
    getUser();
  }, []);

  if (user === null) return <Loader />;

  return (
    <div>
      <Header setModal={setSettingModal} />
      <h1>Credit</h1>
      <p>Name: {user.name}</p>

      <Button onClick={() => setAllCreditsModal(true)}>All Credits</Button>
      <Button onClick={() => setNewCreditModal(true)}>New Credit</Button>

      <Modal open={settingModal} onClose={() => setSettingModal(false)}>
        <Box>
          <SettingModal />
        </Box>
      </Modal>
      <Modal open={allCreditsModal} onClose={() => setAllCreditsModal(false)}>
        <Box>
          <AllCreditsModal />
        </Box>
      </Modal>
      <Modal open={newCreditModal} onClose={() => setNewCreditModal(false)}>
        <Box>
          <NewCreditModal />
        </Box>
      </Modal>
    </div>
  );
};

export default Credit;

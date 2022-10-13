import nc from "next-connect";
//======================================================

const config = {
  onError: (err, req, res) => {
    res.json({ msg: "error dad" });
  },
};
export default function handler() {
  return nc(config);
}

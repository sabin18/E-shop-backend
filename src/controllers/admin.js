
class AdminController {
static GetAllusers(req,res){
    res.status(200).json({
      status: 200,
      message: 'all users!',
    });
}
}

export default AdminController;
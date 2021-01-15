import './AdminPage.css';
import AdminsOnly from '../../components/Admins/adminsonly'

function AdminPage() {
    return (
        <div className="AdminPage">
            <AdminsOnly />
        </div>
    );
}

export default AdminPage;
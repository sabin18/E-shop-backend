import AdminTests from './admin.spec';
import uthTesta from './auth.spec'
import businessTest from './business.spec'
import productTest from './product.spec'
import salesTest from './sales.spec'
import paymentTest from './payment.spec'
import employeeTest from './employee.spec'
import creditTest from './credits.spec'
import debitsTest from './debits.spec'
import expenseTest from './expenses.spec'
import ResetPasswordTest from './ResetPassword.spec'



describe('Admin Test', AdminTests);
describe('Auth Test', uthTesta);
describe('business Test', businessTest);
describe('product Test', productTest);
describe('sales Test', salesTest);
describe ('payment Test',paymentTest);
describe ('employee Test',employeeTest);
describe ('creditTest',creditTest);
describe ('debitsTest',debitsTest);
describe ('expenseTest',expenseTest);
describe ('ResetPasswordTest',ResetPasswordTest)
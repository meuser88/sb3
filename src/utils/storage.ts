import { Form, Question, Response, User, AdminUser, BrandSettings, ActivityLog, ExportRequest, Certificate } from '../types';

class StorageManager {
  private getKey(type: string): string {
    return `formora_${type}`;
  }

  // Forms
  getForms(): Form[] {
    const data = localStorage.getItem(this.getKey('forms'));
    return data ? JSON.parse(data) : [];
  }

  saveForm(form: Form): void {
    const forms = this.getForms();
    const index = forms.findIndex(f => f.id === form.id);
    if (index >= 0) {
      forms[index] = form;
    } else {
      forms.push(form);
    }
    localStorage.setItem(this.getKey('forms'), JSON.stringify(forms));
  }

  getForm(id: string): Form | null {
    const forms = this.getForms();
    return forms.find(f => f.id === id) || null;
  }

  deleteForm(id: string): void {
    const forms = this.getForms().filter(f => f.id !== id);
    localStorage.setItem(this.getKey('forms'), JSON.stringify(forms));
  }

  // Questions
  getQuestions(formId: string): Question[] {
    const data = localStorage.getItem(this.getKey('questions'));
    const questions: Question[] = data ? JSON.parse(data) : [];
    return questions.filter(q => q.formId === formId).sort((a, b) => a.order - b.order);
  }

  saveQuestion(question: Question): void {
    const questions = this.getAllQuestions();
    const index = questions.findIndex(q => q.id === question.id);
    if (index >= 0) {
      questions[index] = question;
    } else {
      questions.push(question);
    }
    localStorage.setItem(this.getKey('questions'), JSON.stringify(questions));
  }

  saveQuestions(questions: Question[]): void {
    const allQuestions = this.getAllQuestions();
    const otherQuestions = allQuestions.filter(q => 
      !questions.some(newQ => newQ.id === q.id)
    );
    const updatedQuestions = [...otherQuestions, ...questions];
    localStorage.setItem(this.getKey('questions'), JSON.stringify(updatedQuestions));
  }

  getAllQuestions(): Question[] {
    const data = localStorage.getItem(this.getKey('questions'));
    return data ? JSON.parse(data) : [];
  }

  deleteQuestion(id: string): void {
    const questions = this.getAllQuestions().filter(q => q.id !== id);
    localStorage.setItem(this.getKey('questions'), JSON.stringify(questions));
  }

  // Users
  getUsers(): User[] {
    const data = localStorage.getItem(this.getKey('users'));
    return data ? JSON.parse(data) : [];
  }

  saveUser(user: User): void {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      users[index] = user;
    } else {
      users.push(user);
    }
    localStorage.setItem(this.getKey('users'), JSON.stringify(users));
  }

  getUser(id: string): User | null {
    const users = this.getUsers();
    return users.find(u => u.id === id) || null;
  }

  getUserByEmail(email: string): User | null {
    const users = this.getUsers();
    return users.find(u => u.email === email) || null;
  }

  // Responses
  getResponses(formId?: string): Response[] {
    const data = localStorage.getItem(this.getKey('responses'));
    const responses: Response[] = data ? JSON.parse(data) : [];
    return formId ? responses.filter(r => r.formId === formId) : responses;
  }

  saveResponse(response: Response): void {
    const responses = this.getResponses();
    const index = responses.findIndex(r => r.id === response.id);
    if (index >= 0) {
      responses[index] = response;
    } else {
      responses.push(response);
    }
    localStorage.setItem(this.getKey('responses'), JSON.stringify(responses));
  }

  getResponse(id: string): Response | null {
    const responses = this.getResponses();
    return responses.find(r => r.id === id) || null;
  }

  // Admin Users
  getAdminUsers(): AdminUser[] {
    const data = localStorage.getItem(this.getKey('admin_users'));
    return data ? JSON.parse(data) : [];
  }

  saveAdminUser(user: AdminUser): void {
    const users = this.getAdminUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      users[index] = user;
    } else {
      users.push(user);
    }
    localStorage.setItem(this.getKey('admin_users'), JSON.stringify(users));
  }

  getAdminUser(id: string): AdminUser | null {
    const users = this.getAdminUsers();
    return users.find(u => u.id === id) || null;
  }

  deleteAdminUser(id: string): void {
    const users = this.getAdminUsers().filter(u => u.id !== id);
    localStorage.setItem(this.getKey('admin_users'), JSON.stringify(users));
  }

  // Brand Settings
  getBrandSettings(): BrandSettings {
    const data = localStorage.getItem(this.getKey('brand_settings'));
    return data ? JSON.parse(data) : {
      brandName: 'Formora',
      primaryColor: '#2563eb',
      showPoweredBy: true
    };
  }

  saveBrandSettings(settings: BrandSettings): void {
    localStorage.setItem(this.getKey('brand_settings'), JSON.stringify(settings));
  }

  // Activity Logs
  getActivityLogs(): ActivityLog[] {
    const data = localStorage.getItem(this.getKey('activity_logs'));
    return data ? JSON.parse(data) : [];
  }

  saveActivityLog(log: ActivityLog): void {
    const logs = this.getActivityLogs();
    logs.unshift(log); // Add to beginning
    // Keep only last 100 logs
    if (logs.length > 100) {
      logs.splice(100);
    }
    localStorage.setItem(this.getKey('activity_logs'), JSON.stringify(logs));
  }

  // Export Requests
  getExportRequests(): ExportRequest[] {
    const data = localStorage.getItem(this.getKey('export_requests'));
    return data ? JSON.parse(data) : [];
  }

  saveExportRequest(request: ExportRequest): void {
    const requests = this.getExportRequests();
    const index = requests.findIndex(r => r.id === request.id);
    if (index >= 0) {
      requests[index] = request;
    } else {
      requests.push(request);
    }
    localStorage.setItem(this.getKey('export_requests'), JSON.stringify(requests));
  }

  // Certificates
  getCertificates(): Certificate[] {
    const data = localStorage.getItem(this.getKey('certificates'));
    return data ? JSON.parse(data) : [];
  }

  saveCertificate(certificate: Certificate): void {
    const certificates = this.getCertificates();
    const index = certificates.findIndex(c => c.id === certificate.id);
    if (index >= 0) {
      certificates[index] = certificate;
    } else {
      certificates.push(certificate);
    }
    localStorage.setItem(this.getKey('certificates'), JSON.stringify(certificates));
  }

  getCertificate(formId: string): Certificate | null {
    const certificates = this.getCertificates();
    return certificates.find(c => c.formId === formId) || null;
  }

  deleteCertificate(id: string): void {
    const certificates = this.getCertificates().filter(c => c.id !== id);
    localStorage.setItem(this.getKey('certificates'), JSON.stringify(certificates));
  }
}

export const storage = new StorageManager();
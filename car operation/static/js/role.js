function apply_roles() {
	var role = localStorage.getItem('role');
	console.log(role);
	
	if (role == 'sales_executive') {
		$(".my-target").show();
		$(".contacts-listing").show();
		$(".lead-listing").show();
		$(".eval_scheduled").show();
		$(".followups").show();
        $(".evaldropdown").show();
		$(".openEditSalesLeadForm").show();
		$(".addleadfollowupForm").show();
		// $(".openEvalScheduledForm").hide();
		$(".openEditEvalScheduledForm").show();
		// $(".openEvalCompForm").show();
		$(".openCreateQuotationForm").show();
		$(".openCreateNegotiationForm").show();
		$(".openPaymentDoneForm").show();
		// $(".payment_received").show();
		$(".openWonForm").show();
		$(".openLostForm").show();
		$("#quote_send_to_customer").show();
	}
}